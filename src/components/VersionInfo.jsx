// a implementer plus tard pour toutes les infos que le pokemon a qui change par version
import styled from "styled-components";
import { useState, useEffect } from "react";
import PokemonType from "./TypeStyle";


const EncadrementAttaques = styled.div`
    display : flex ;
    justify-content: flex-start;
    margin : 10px;
    flex-direction: column;

`

const TitreMethode = styled.h1`
    margin-top : 0;
    font-weight: bolder;
    text-align : center ;
`

const LigneMethode = styled.div`
    display : grid;
    grid-template-columns: 1fr 2fr 1fr;
    border: 1px black;
    

`
const LvlCt = styled.div`
    text-align : center;
    border: 0.2px solid black;


`
const NomAttaque = styled.div`
    text-align : center;
    border: 1px black;
    border: 0.2px solid black;

`
const TableauAttaque = styled.div`
    display : flex;
    flex-direction : column; 
    background : wheat;
    margin-right: 20%;
    margin-left : 20%;

`
const Type = styled.div`
text-align : center;
border: 0.2px solid black;

`

const EncadrementMethode = styled.div`
    background : BurlyWood;
    border-radius: 20px; /* Ajoute une bordure arrondie */
    margin-bottom : 15px;

`

function VersionInfo({attaques, versionGrp}){
    const [attaqueListNiveau, setAttaqueListNiveau] = useState([]);
    const [attaqueListMachine, setAttaqueListMachine] = useState([]);
    const [attaqueListEgg, setAttaqueListEgg] = useState([]);

    const {grp, id} = versionGrp;
    useEffect(() => {
        const fetchData = async() =>{
            let newAttaqueListNiveau = [];
            let newAttaqueListMachine =[];
            let newAttaqueListEgg =[];
            await Promise.all(
            attaques?.map(async(attaque) => {
                let versionGrpDetail = attaque?.version_group_details;
                let indexFin = id;
                if(versionGrpDetail.length < id){
                    indexFin = versionGrpDetail.length;
                }
                let i = 0
                let isGroupNameFoundInAttaque =false;
                while(i<indexFin && !isGroupNameFoundInAttaque){
                    isGroupNameFoundInAttaque = (versionGrpDetail[i]?.version_group.name === grp)
                    i++;
                }
                if(isGroupNameFoundInAttaque){
                    let rep = await fetch(attaque?.move.url);
                    if(!rep.ok){
                        throw new Error('Erreur a la recuperation du nom du type de l\'attaque');
                    }
                    let data = await rep?.json();
                    let attaqueType = data?.type?.name;
                    if(versionGrpDetail[i]?.move_learn_method?.name === "level-up"){
                        newAttaqueListNiveau = [ ...newAttaqueListNiveau, {
                            attaqueNom: attaque?.move?.name,
                            attaqueType, 
                            learnAt : versionGrpDetail[i]?.level_learned_at, 
                        }];
                    }
                    if(versionGrpDetail[i]?.move_learn_method?.name === "machine"){
                        await Promise.all(data?.machines?.map(async(machineDetails) =>{
                            if(machineDetails?.version_group?.name === grp){
                                let rep = await fetch(machineDetails?.machine?.url);
                                let data = await rep?.json();
                                newAttaqueListMachine = [ ...newAttaqueListMachine, {
                                    attaqueNom: attaque?.move?.name,
                                    attaqueType, 
                                    nomMachine: data?.item?.name
                                }]; 
                            }
                        }))

                    }

                    if(versionGrpDetail[i]?.move_learn_method?.name === "egg"){
                        newAttaqueListEgg = [ ...newAttaqueListEgg, {
                            attaqueNom: attaque?.move?.name,
                            attaqueType, 
                        }];
                    }
                } 
                newAttaqueListNiveau.sort((a,b)=>{
                    return a?.learnAt- b?.learnAt;
                })
                
                newAttaqueListMachine.sort((a,b)=>{
                    return a?.nomMachine.slice(2) - b?.nomMachine.slice(2);
                })

            }));

            setAttaqueListNiveau(newAttaqueListNiveau);
            setAttaqueListMachine(newAttaqueListMachine);
            setAttaqueListEgg(newAttaqueListEgg);

        };
        fetchData()
    },[]);
    
    return(
        <EncadrementAttaques>
            {(attaqueListNiveau.length != 0)&&
                <EncadrementMethode>
                    <TitreMethode> 
                        Attaques apprises par niveau 
                    </TitreMethode>       
                    <TableauAttaque>
                    {
                        attaqueListNiveau?.map((attaqueInfo, index) => {
                            return (
                            <LigneMethode key={index}>  
                                
                                <LvlCt>
                                    {attaqueInfo?.learnAt}
                                </LvlCt>
                                <NomAttaque>
                                    {attaqueInfo?.attaqueNom}
                                </NomAttaque>
                                <Type>
                                    <PokemonType type={attaqueInfo?.attaqueType}> </PokemonType>
                                </Type>
                            </LigneMethode>
                        )
                        })

                    }
                    </TableauAttaque>
            </EncadrementMethode>}
            {(attaqueListMachine.length != 0)&&
                <EncadrementMethode>
                    <TitreMethode> 
                        Attaques apprises par machine 
                    </TitreMethode>   

                    <TableauAttaque>

                        {
                            attaqueListMachine?.map((attaqueInfo, index) => {
                                return (
                                    <LigneMethode key={index}>  
                                        <LvlCt>
                                            {attaqueInfo?.nomMachine}
                                        </LvlCt>
                                        <NomAttaque>
                                            {attaqueInfo?.attaqueNom}
                                        </NomAttaque>
                                        <Type>
                                            <PokemonType type={attaqueInfo?.attaqueType}> </PokemonType>
                                        </Type>
                                    </LigneMethode>
                                )
                            })

                        }
                    </TableauAttaque>
            </EncadrementMethode>

            }

        </EncadrementAttaques>



    );
}


export default VersionInfo;