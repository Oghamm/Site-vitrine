import React, {useEffect, useState} from "react";
import Link from "gatsby-link";
import {AxiosInstance as axios} from "axios";
import { API_ENDPOINT } from '../../config/index';
import _ from   "lodash";


const Card = (props) => {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState("");
    const [currentState, setCurrentState] = useState("");

    useEffect(()=> {
        setName(props.name);
        setCurrentState(props.item.currentState);
    },[])

    const handleEdit = () => {
        setEdit(edit => !edit);
    }
    const handleSwitch = () => {
        console.log(currentState);
        if (currentState === "ACTIVE") {
            props.deletePageData(props.id);
            setCurrentState("REMOVED");
        }
        else {
            props.activePageData(props.id);
            setCurrentState("ACTIVE");
        }
    }


    const handleSubmit = (e,item) => {
        e.preventDefault();
        if (name === "" || name === props.name)
            return
        if(props.data.filter(item => item.name.en === name).length >= 1) {
            return;
        }
        props.changeName(name, item.id);
        props.putPageData(item.id, name);
        handleEdit();
    }

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }



     return (
         <>
             {props.add ?
                 <div className="site-item" key={props.id}>
                     <div
                         className="site-content root-level-1"
                     >
                         {
                             !edit ?
                                 <p className=""
                                    onClick={handleEdit}>{ props.name }</p>
                                 :
                                 <div>
                                     <form onSubmit={e=> handleSubmit(e, props.item)}>
                                         <input value={name} type="text" name="namepage" onChange={handleChange} placeholder={props.name}/>
                                         <input type="submit" hidden={true}/>
                                     </form>
                                 </div>
                         }

                     </div>

                     <div className="action-bar">
                         {!edit ?
                             <>
                                 <a href={`https://d2652zttv6bt8h.cloudfront.net/courses/${props.siteID}`}>
                                     <img
                                         className="site-item__edit--img"
                                         src="/img/with-banner/dashboard/site-item-edit.svg"
                                     />
                                 </a>

                                 <a >
                                     <div className="site-item__add" onClick={props.handleAddPage}>
                                         <img
                                             src="/img/with-banner/dashboard/site-item-add.svg"
                                             className="site-item__add--img"
                                         />
                                     </div>
                                 </a>
                             </>
                             :
                             <a>
                                 <i className="fas fa-times" onClick={handleEdit}></i>
                             </a>
                        }

                     </div>
                 </div>
             :
                 <li key={props.id}>
                     <div className="site-item" >
                         <a

                             className="site-content-link"
                         >
                             <div
                                 className="site-content child-level-1"
                             >
                                 {
                                     !edit ?
                                         <p className={currentState==="REMOVED" && "removed"} onClick={handleEdit}>{ props.name }</p>
                                         :
                                         <div>
                                             <form onSubmit={e=> handleSubmit(e, props.item)}>
                                                 <input value={name} type="text" name="namepage" onChange={handleChange} placeholder={props.name}/>
                                                 <input type="submit" hidden={true}/>
                                             </form>
                                         </div>
                                 }
                             </div>
                         </a>

                         <div className="action-bar">
                             {!edit ?
                                 <>
                                     {
                                         currentState === "ACTIVE" ?
                                             <a href={`https://d2652zttv6bt8h.cloudfront.net/courses/${props.siteID}${props.item.path}`}>
                                                 <img
                                                     className="site-item__edit--img"
                                                     src="/img/with-banner/dashboard/site-item-edit.svg"
                                                 />
                                             </a>
                                             :
                                             <a >
                                                 <img
                                                     className="site-item__edit--img"
                                                     src="/img/with-banner/dashboard/site-item-edit-grey.svg"
                                                 />
                                             </a>
                                     }


                                     <a >
                                         <label className="switch">
                                             {currentState === "ACTIVE" ?
                                                 <>
                                                     <input type="checkbox" checked onClick={handleSwitch}/>
                                                     <span className="slider round"></span>
                                                 </>
                                                 :
                                                 <>
                                                     <input type="checkbox"  onClick={handleSwitch}/>
                                                     <span className="slider round"></span>
                                                 </>
                                             }

                                         </label>
                                     </a>
                                 </>
                                 :
                                 <a >
                                     <i className="fas fa-times" onClick={handleEdit}></i>
                                 </a>


                             }

                         </div>
                     </div>
                 </li>}
             </>
    )
}

const Content = () => {
    const [multilangue, setMultilangue] = useState(true);
    const [theme, setTheme] = useState(true);
    const [help, setHelp] = useState(false);
    const [shop, setShop] = useState(false);
    const [graph, setGraph] = useState(true);
    const [write, setWrite] = useState(false);
    const [migrate, setMigrate] = useState(false);
    const [translate, setTranslate] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [data,setData]=useState([]);
    const[addOpen, setAddOpen] = useState(false);
    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [isOffer, setIsOffer] = useState(true);
    const [isHosting, setIsHosting] = useState(true);
    const [isApplications, setIsApplications] = useState(true);
    const [isIntegrations, setIsIntegrations] = useState(true);
    const [isServices, setIsServices] = useState(true);
    // templateId = "9baf9a1c-4344-48a2-b694-760ded75a7e8"
    // siteId = "4f4fc83d-f3e1-4607-9362-ff70ef5ec07e"

    let API = API_ENDPOINT;
    const [templateId, setTemplateId] = useState("9baf9a1c-4344-48a2-b694-760ded75a7e8");
    const [siteId, setSiteId] = useState("4f4fc83d-f3e1-4607-9362-ff70ef5ec07e");
    let params = new URLSearchParams(document.location.search.substring(1));

    const handleOffer = () => {
        setIsOffer(isOffer => ! isOffer);
        console.log(test);
    }

    const handleHosting = () => {
        setIsHosting(isHosting => ! isHosting);
    }
    const handleApplication = () => {
        setIsApplications(isApplications => !isApplications);
    }
    const handleIntegration = () => {
        setIsIntegrations(isIntegrations => ! isIntegrations);
    }
    const handleService = () => {
        setIsServices(isServices => ! isServices);
    }

    const toggleMenuOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleMultilangue =() => {
        setMultilangue(multilangue => !multilangue);

    }

    const handleAddPage =() => {
        setAddOpen(addOpen=>!addOpen);
        setName("");
    }

    const handleTheme =() => {
        setTheme(theme => !theme);
    }
    const handleHelp =() => {
        setHelp(help => !help);
    }
    const handleCross =() => {
        setShop(false);
    }
    const handleShop =() => {
        setShop(true);
    }

    const handleClickGraph =() => {
        setGraph(graph=> !graph);
    }
    const handleClickWrite =() => {
        setWrite(write=> !write);
    }
    const handleClickMigrate =() => {
        setMigrate(migrate=> !migrate);
    }
    const handleClickTranslate =() => {
        setTranslate(translate=> !translate);
    }
    const changeName = (name, id) => {
        let index = data.findIndex((element)=> element.id === id);
        let newData = _.cloneDeep(data);
        newData[index].name.en = name;
        setData(newData);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    const handleChangeModel = (e) => {
        e.preventDefault();
        setModel(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.filter(item => item.name.en === name).length >= 1 || model === "") {
            return;
        }
        postPageData();
        handleAddPage();
    }


    const getTemplateId = () => {
        fetch(`${API}/site/${siteId}`
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                setTemplateId(myJson.activeTemplate);
                console.log(myJson);
            });
    }

    const getPageData=()=>{
        fetch(`${API}/template/${templateId}/pages`
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                setData(myJson)
            });
    }

    const deletePageData=(pageId)=>{
        let index = data.findIndex((element)=> element.id === pageId);
        let newData = _.cloneDeep(data);
        newData[index].currentState = "REMOVED";
        setData(newData);
        fetch(`${API}/page/${pageId}`
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: "DELETE"
            }
        )

    }


    const postPageData = () => {
        fetch(`${API}/page`
            ,{
                method:"POST",
                headers : {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {
                       model:model,
                        name: {
                           en:name
                        },
                        parentTemplate:templateId,
                        path:`/${name}`

                    }

                )
            }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                setData([...data, myJson]);
            });
    }
    const activePageData = (id) => {
        let index = data.findIndex((element)=> element.id === id);
        let newData = _.cloneDeep(data);
        newData[index].currentState = "ACTIVE";
        setData(newData);
        fetch(`${API}/page`
            ,{
                method:"PUT",
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify( {
                        id: id,
                        currentState: "ACTIVE"

                    }

                )
            }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
            });



    }

    const putPageData = (id, name) => {
        if (name === "")
            return
        let index = data.findIndex((element)=> element.path === "/");
        if (data[index].id === id) {
            fetch(`${API}/page`
                ,{
                    method:"PUT",
                    headers : {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify( {
                            id: id,
                            name: {
                                "en": name
                            },
                            path : `/`

                        }

                    )
                }
            )
                .then(function(response){
                    return response.json();
                })
                .then(function(myJson) {
                });
        }
        else {
            fetch(`${API}/page`
                ,{
                    method:"PUT",
                    headers : {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify( {
                            id: id,
                            name: {
                                "en": name
                            },
                            path : `/${name}`

                        }

                    )
                }
            )
                .then(function(response){
                    return response.json();
                })
                .then(function(myJson) {
                });
        }

    }

    useEffect(()=>{
        setSiteId(params.get("siteId"));
        getTemplateId()
        getPageData();
    },[])



    return (
        <>
            <div className="container-fluid">
                <div className="row main-content">
                    <div className="col-lg-4 col-md-5 bg-white aside">
                        <div className="aside__title">
                            <Link to={"/"}>
                                <img
                                    src="/img/cms/logo-title-aside.svg"
                                    alt=""
                                />
                            </Link>
                        </div>

                        <div className={"aside__offer"}>
                            <div className={"mb-3"}>
                                <h6 className={"aside__section-title"}>
                                    <i className="fas fa-trophy"></i>
                                    Mon Offre

                                    {isOffer ?
                                        <img src={"/img/with-banner/dashboard/tab.svg"} className={"tab"}
                                             onClick={handleOffer}/>
                                        :
                                        <img src={"/img/with-banner/dashboard/tab-2.svg"} className={"tab"}
                                             onClick={handleOffer}/>
                                    }

                                </h6>
                            </div>
                            {isOffer &&
                                <>
                                    <div
                                        className="projects-and-models__choice form-group select"
                                    >
                                        <select className="form-control">
                                            <option selected
                                            >Starter
                                            </option
                                            >
                                            <option>
                                                Basic
                                            </option>
                                            <option>
                                                Premium
                                            </option>
                                        </select>
                                    </div>
                                    <div className={"information-bloc"}>
                                        <div className={"info-logo"}>
                                            <img src={"/img/with-banner/models/info.svg"}/>
                                        </div>
                                        <div className={"info-text"}>
                                            Bloc information sur le service choisis Bloc information sur le service
                                            Information sur le service choisis Bloc information
                                        </div>

                                    </div>
                                </>

                            }

                        </div>
                        <div className="aside__host">
                            <div className="mb-3">
                                <h6 className="aside__section-title">
                                    <img
                                        src="/img/with-banner/dashboard/host.svg"
                                        className="aside__section-img"
                                    />
                                    Hébergement
                                    {isHosting ? <img src={"/img/with-banner/dashboard/tab.svg"} className={"tab"}
                                        onClick={handleHosting}/>
                                    :
                                        <img src={"/img/with-banner/dashboard/tab-2.svg"} className={"tab"}
                                             onClick={handleHosting}/>}

                                </h6>
                            </div>
                            {isHosting &&
                            <>
                                <label className="input-radio"
                                >Hébergement dans le cloud
                                    <input
                                        type="radio"
                                        name="host"
                                    />
                                    <span className="checkmark"/>
                                </label>

                                <label className="input-radio"
                                >Enregistrer nom de domaine
                                    <input type="radio" name="host"/>
                                    <span className="checkmark"/>
                                </label>
                                <label className="input-radio"
                                >Transférer nom de domaine
                                    <input type="radio" name="host"/>
                                    <span className="checkmark"/>
                                </label>
                                <form>
                                    <div className={"flex-container"}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="link"
                                                name="lien_du_site"
                                                required={true}
                                                className="form-control"
                                            />
                                        </div>
                                        <a href="" className="btn btn-primary ml-3">Valider</a>
                                    </div>

                                </form>
                                <div className={"flex-container"}>
                                    <img src={"/img/with-banner/dashboard/check.svg"}/>
                                    <p className={"check__text"}>
                                        Disponible pour 39,90€
                                    </p>
                                </div>
                                <div className={"flex-container false"}>
                                    <i className="fas fa-times"></i>
                                    <p className={"false__text"}>
                                        Non disponible
                                    </p>
                                </div>
                            </>
                            }


                        </div>

                        <div className="aside__application">
                            <div className="mb-3">
                                <h6 className="aside__section-title">
                                    <img
                                        src="/img/with-banner/dashboard/application.svg"
                                        className="aside__section-img"
                                    />
                                    Applications
                                    <p className={"nb-app"}>
                                        7 actives
                                    </p>
                                    {
                                        isApplications ?
                                            <img src={"/img/with-banner/dashboard/tab.svg"} className={"tab"} onClick={handleApplication}/>
                                            :
                                            <img src={"/img/with-banner/dashboard/tab-2.svg"} className={"tab"} onClick={handleApplication}/>
                                    }

                                </h6>
                            </div>
                            {isApplications &&
                            <>
                                <div className="all-btn-application">
                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-1"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-1"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >4,90</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-2"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-2"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >Offert</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-3"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-3"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >Offert</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-4"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-4"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >Offert</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-5"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-5"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >Offert</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-6"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-6"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >4,90</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-7"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-7"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >4,90</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-8"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-8"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >Offert</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-9"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-9"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >Offert</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-10"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-10"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >Offert</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-11"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-11"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >Offert</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-12"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-12"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >Offert</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-13"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-13"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >4,90</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-14"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-14"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >4,90</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-15"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-15"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >Offert</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-16"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-16"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >4,90</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-17"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-17"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >4,90</span
                                        >
                                    </div>

                                    <div className="btn-application">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            name="application-btn"
                                            id="application-18"
                                        />
                                        <label
                                            className="btn-application--title"
                                            htmlFor="application-18"
                                        >Application</label
                                        >
                                        <span className="btn-application--price"
                                        >Offert</span
                                        >
                                    </div>
                                </div>
                                <div className={"information-bloc"}>
                                    <div className={"info-logo"}>
                                        <img src={"/img/with-banner/models/info.svg"}/>
                                    </div>
                                    <div className={"info-text"}>
                                        Bloc information sur le service choisis Bloc information sur le service
                                        Information sur le service choisis Bloc information
                                    </div>

                                </div>
                            </>
                            }


                        </div>

                        <div className="aside__more-inte">
                            <div className="mb-3">
                                <h6 className="aside__section-title">
                                    <img
                                        src="/img/with-banner/dashboard/integration.svg"
                                        className="aside__section-img"
                                    />
                                    Intégrations supplémentaires
                                    {isIntegrations ?
                                        <img src={"/img/with-banner/dashboard/tab.svg"} className={"tab"} onClick={handleIntegration}/>
                                    :
                                        <img src={"/img/with-banner/dashboard/tab-2.svg"} className={"tab"} onClick={handleIntegration}/>}
                                </h6>
                            </div>

                            {
                                isIntegrations &&
                                    <>
                                        <div className="all-btn-more-inte">
                                            <div className="btn-more-inte selected">
                                                <div className="btn-more-inte--img">
                                                    <img
                                                        src="/img/with-banner/dashboard/internet.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="btn-more-inte--title">
                                                    Application
                                                </p>
                                                <p className="btn-more-inte--price">+16,00</p>
                                            </div>

                                            <div className="btn-more-inte">
                                                <div className="btn-more-inte--img">
                                                    <img
                                                        src="/img/with-banner/dashboard/internet.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="btn-more-inte--title">
                                                    Application
                                                </p>
                                                <p className="btn-more-inte--price">+16,00</p>
                                            </div>

                                            <div className="btn-more-inte">
                                                <div className="btn-more-inte--img">
                                                    <img
                                                        src="/img/with-banner/dashboard/internet.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="btn-more-inte--title">
                                                    Application
                                                </p>
                                                <p className="btn-more-inte--price">+16,00</p>
                                            </div>

                                            <div className="btn-more-inte selected">
                                                <div className="btn-more-inte--img">
                                                    <img
                                                        src="/img/with-banner/dashboard/internet.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="btn-more-inte--title">
                                                    Application
                                                </p>
                                                <p className="btn-more-inte--price">+16,00</p>
                                            </div>
                                            <div className="btn-more-inte">
                                                <div className="btn-more-inte--img">
                                                    <img
                                                        src="/img/with-banner/dashboard/internet.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="btn-more-inte--title">
                                                    Application
                                                </p>
                                                <p className="btn-more-inte--price">+16,00</p>
                                            </div>

                                            <div className="btn-more-inte">
                                                <div className="btn-more-inte--img">
                                                    <img
                                                        src="/img/with-banner/dashboard/internet.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="btn-more-inte--title">
                                                    Application
                                                </p>
                                                <p className="btn-more-inte--price">+16,00</p>
                                            </div>

                                            <div className="btn-more-inte">
                                                <div className="btn-more-inte--img">
                                                    <img
                                                        src="/img/with-banner/dashboard/internet.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="btn-more-inte--title">
                                                    Application
                                                </p>
                                                <p className="btn-more-inte--price">+16,00</p>
                                            </div>

                                            <div className="btn-more-inte">
                                                <div className="btn-more-inte--img">
                                                    <img
                                                        src="/img/with-banner/dashboard/internet.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="btn-more-inte--title">
                                                    Application
                                                </p>
                                                <p className="btn-more-inte--price">+16,00</p>
                                            </div>
                                        </div>
                                        <div className={"information-bloc"}>
                                            <div className={"info-logo"}>
                                                <img src={"/img/with-banner/models/info.svg"}/>
                                            </div>
                                            <div className={"info-text"}>
                                                Bloc information sur le service choisis Bloc information sur le service
                                                Information sur le service choisis Bloc information
                                            </div>

                                        </div>
                                    </>

                            }


                        </div>



                        <div className="aside__complementary">
                            <div className="mb-3">
                                <h6>
                                    <img
                                        src="/img/with-banner/dashboard/complementary.svg"
                                        className="aside__section-img"
                                    />
                                    Services complémentaires
                                    {isServices ?
                                        <img src={"/img/with-banner/dashboard/tab.svg"} className={"tab"} onClick={handleService}/>
                                        :
                                        <img src={"/img/with-banner/dashboard/tab-2.svg"} className={"tab"} onClick={handleService}/>}
                                </h6>
                            </div>

                            {
                                isServices &&
                                    <>
                                        <div className="all-btn-choices">
                                            <div
                                                className={graph ?"btn-choice rounded selected graph" : "btn-choice rounded graph"}
                                                data-target="#c-graphism"
                                                onClick={handleClickGraph}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="31.899"
                                                    height="31.899"
                                                    viewBox="0 0 19.169 19.908"
                                                >
                                                    <g
                                                        className="a"
                                                        transform="translate(-9.497)"
                                                    >
                                                        <g
                                                            transform="translate(25.686 2.357)"
                                                        >
                                                            <path
                                                                className="b"
                                                                d="M426.762,60.988a.467.467,0,0,0-.026-.085.472.472,0,0,0-.042-.079.444.444,0,0,0-.126-.126.487.487,0,0,0-.079-.042.455.455,0,0,0-.264-.026.464.464,0,0,0-.085.026.485.485,0,0,0-.079.042.462.462,0,0,0-.069.057.457.457,0,0,0-.057.069.465.465,0,0,0-.042.079.458.458,0,0,0-.026.085.448.448,0,0,0-.009.089.458.458,0,0,0,.009.09.456.456,0,0,0,.068.164.461.461,0,0,0,.057.07.459.459,0,0,0,.148.1.459.459,0,0,0,.085.026.464.464,0,0,0,.179,0,.462.462,0,0,0,.085-.026.458.458,0,0,0,.148-.1.461.461,0,0,0,.134-.323A.454.454,0,0,0,426.762,60.988Z"
                                                                transform="translate(-425.858 -60.62)"
                                                            />
                                                        </g>
                                                        <g transform="translate(23.618)">
                                                            <g transform="translate(0)">
                                                                <path
                                                                    className="b"
                                                                    d="M377.725,15.481a2.791,2.791,0,0,0-.777-1.813,2.143,2.143,0,0,0,.41-1.262c0-.052,0-.1-.006-.155a27.367,27.367,0,0,0,.325-4.42c0-.231-.01-.53-.015-.673l0-.061a19.718,19.718,0,0,0-.683-5.008C376.546.7,375.949,0,375.2,0s-1.342.7-1.774,2.089a19.716,19.716,0,0,0-.683,5.008l0,.061c0,.144-.015.443-.015.673a27.364,27.364,0,0,0,.325,4.42c0,.051-.006.1-.006.155a2.142,2.142,0,0,0,.4,1.249,2.777,2.777,0,0,0-.767,2.063,2.592,2.592,0,0,0,.95,1.885,1.178,1.178,0,0,1,.434,1.473.623.623,0,0,0,.156.7.542.542,0,0,0,.356.128.888.888,0,0,0,.393-.1C375.829,19.379,377.808,17.251,377.725,15.481Zm-4.067-8.293,0-.063C373.8,2.477,374.779.913,375.2.913s1.4,1.564,1.544,6.212l0,.063c0,.139.014.428.014.643,0,1.046-.047,2.045-.138,2.953a2.146,2.146,0,0,0-.966-.484V4.314a.457.457,0,0,0-.913,0V10.3a2.147,2.147,0,0,0-.966.484c-.091-.908-.138-1.907-.138-2.953C373.644,7.616,373.653,7.327,373.658,7.188Zm2.788,5.218a1.24,1.24,0,0,1-.454.959c-.021.017-.042.033-.064.049l-.023.016q-.036.024-.073.046l-.019.011c-.027.015-.054.03-.083.043l-.01,0a1.247,1.247,0,0,1-.3.093l-.009,0q-.049.008-.1.013H375.3c-.033,0-.067,0-.1,0h0c-.034,0-.068,0-.1,0h-.012q-.05,0-.1-.013h-.008a1.244,1.244,0,0,1-.305-.1h0c-.03-.014-.06-.03-.089-.047l-.012-.007c-.027-.016-.053-.033-.079-.051l-.016-.012q-.037-.027-.072-.056a1.241,1.241,0,0,1,.605-2.178h0l.053-.007h.01l.049,0h.014l.062,0h0l.062,0h.013l.05,0h.009l.054.007h0A1.244,1.244,0,0,1,376.445,12.406Zm-.575,5.321a6.771,6.771,0,0,1-.8.879,2.055,2.055,0,0,0-.8-1.654,1.729,1.729,0,0,1-.678-1.276,1.854,1.854,0,0,1,.529-1.4l.021.011.087.047.023.012a2.146,2.146,0,0,0,.247.1l.014,0q.063.021.127.039h0a2.136,2.136,0,0,0,.265.054l.027,0,.1.01.033,0c.043,0,.087,0,.131,0h0c.043,0,.086,0,.129,0l.032,0,.1-.01.028,0a2.138,2.138,0,0,0,.387-.09l.015,0q.057-.02.113-.042l.013-.005c.041-.017.081-.034.12-.054l.018-.009.089-.047.02-.01a1.87,1.87,0,0,1,.544,1.246A3.768,3.768,0,0,1,375.87,17.726Z"
                                                                    transform="translate(-372.68)"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g
                                                            transform="translate(9.497 1.722)"
                                                        >
                                                            <g transform="translate(0)">
                                                                <path
                                                                    className="b"
                                                                    d="M21.648,52.524a3.17,3.17,0,0,1,.6-1.875,3.766,3.766,0,0,0,.634-2.979,3.484,3.484,0,0,0-1.652-2.329,7.626,7.626,0,0,0-3.852-1.049h0A8.074,8.074,0,0,0,9.5,52.508a8.339,8.339,0,0,0,2.426,5.957,7.627,7.627,0,0,0,9.3,1.248,3.492,3.492,0,0,0,1.66-2.334,3.763,3.763,0,0,0-.633-2.979A3.169,3.169,0,0,1,21.648,52.524Zm.341,4.666a2.59,2.59,0,0,1-1.227,1.734,6.714,6.714,0,0,1-8.192-1.1,7.432,7.432,0,0,1-2.159-5.31,7.16,7.16,0,0,1,6.968-7.3h0a6.713,6.713,0,0,1,3.391.923,2.582,2.582,0,0,1,1.22,1.728,2.852,2.852,0,0,1-.48,2.256,4.137,4.137,0,0,0,0,4.822A2.848,2.848,0,0,1,21.988,57.191Z"
                                                                    transform="translate(-9.497 -44.293)"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g
                                                            transform="translate(18.908 7.774)"
                                                        >
                                                            <g transform="translate(0)">
                                                                <path
                                                                    className="b"
                                                                    d="M253.366,204.929a4.758,4.758,0,0,1-.906-2.813,4.824,4.824,0,0,1,.261-1.574.457.457,0,1,0-.863-.3,5.734,5.734,0,0,0-.31,1.872,5.665,5.665,0,0,0,1.08,3.35.457.457,0,0,0,.739-.536Z"
                                                                    transform="translate(-251.547 -199.936)"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g
                                                            transform="translate(19.901 6.415)"
                                                        >
                                                            <path
                                                                className="b"
                                                                d="M277.876,165.138l-.008-.008a.457.457,0,1,0-.647.645l.008.008a.457.457,0,0,0,.647-.645Z"
                                                                transform="translate(-277.088 -164.995)"
                                                            />
                                                        </g>
                                                        <g
                                                            transform="translate(10.912 7.908)"
                                                        >
                                                            <g transform="translate(0)">
                                                                <path
                                                                    className="b"
                                                                    d="M47.936,203.392a2.045,2.045,0,1,0,2.045,2.045A2.048,2.048,0,0,0,47.936,203.392Zm0,3.178a1.132,1.132,0,1,1,1.132-1.132A1.133,1.133,0,0,1,47.936,206.57Z"
                                                                    transform="translate(-45.891 -203.392)"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g
                                                            transform="translate(13.897 12.239)"
                                                        >
                                                            <path
                                                                className="b"
                                                                d="M126.157,315.375a2.045,2.045,0,1,0,0,2.893A2.048,2.048,0,0,0,126.157,315.375Zm-.646,2.247a1.132,1.132,0,1,1,0-1.6A1.125,1.125,0,0,1,125.511,317.622Z"
                                                                transform="translate(-122.665 -314.777)"
                                                            />
                                                        </g>
                                                        <g
                                                            transform="translate(13.898 3.579)"
                                                        >
                                                            <path
                                                                className="b"
                                                                d="M126.18,92.656a2.044,2.044,0,1,0,0,2.893A2.048,2.048,0,0,0,126.18,92.656Zm-.646,2.247a1.132,1.132,0,1,1,0-1.6A1.133,1.133,0,0,1,125.535,94.9Z"
                                                                transform="translate(-122.69 -92.058)"
                                                            />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>

                                            <div
                                                className={migrate ?"btn-choice rounded selected migr":"btn-choice rounded migr"}
                                                data-target="#c-migrate"
                                                onClick={handleClickMigrate}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="31.899"
                                                    height="31.899"
                                                    viewBox="0 0 23.635 23.635"
                                                >

                                                    <g className="a">
                                                        <path
                                                            className="b"
                                                            d="M106.122,85.438a1.19,1.19,0,1,0-.95-.475l-1.953,2.729a1.185,1.185,0,0,0-1.179.26l-1.3-.738a1.188,1.188,0,1,0-2.323,0l-1.3.738a1.187,1.187,0,1,0,.353.62l1.3-.738a1.185,1.185,0,0,0,1.618,0l1.3.738a1.188,1.188,0,1,0,2.111-.464l1.953-2.729A1.184,1.184,0,0,0,106.122,85.438Zm0-1.664a.475.475,0,1,1-.475.475A.476.476,0,0,1,106.122,83.774ZM96.306,89.3a.475.475,0,1,1,.475-.475A.476.476,0,0,1,96.306,89.3Zm3.272-1.858a.475.475,0,1,1,.475-.475A.476.476,0,0,1,99.578,87.438ZM102.85,89.3a.475.475,0,1,1,.475-.475A.476.476,0,0,1,102.85,89.3Z"
                                                            transform="translate(-90.858 -79.442)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M19.907,56.071H1.008a.3.3,0,0,1-.3-.294V41.121a.3.3,0,0,1,.3-.294H2.689a.355.355,0,1,0,0-.71H1.008a1.008,1.008,0,0,0-1.008,1V55.776a1.008,1.008,0,0,0,1.008,1H3.467v.782a.81.81,0,0,0,.811.808H7.846l-1.68,3.268a.356.356,0,0,0,.635.324L8.647,58.37h3.942l1.846,3.592a.356.356,0,0,0,.635-.324l-1.68-3.268h3.569a.81.81,0,0,0,.811-.808v-.782h2.138a.355.355,0,1,0,0-.71Zm-2.851,1.492a.1.1,0,0,1-.1.1H4.277a.1.1,0,0,1-.1-.1v-.782H17.056Z"
                                                            transform="translate(0 -38.521)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M79.42,8.866H95.172a.293.293,0,0,1,.289.3v3.39a.349.349,0,1,0,.7,0V9.162a1,1,0,0,0-.986-1.008h-7.46v-.7a.886.886,0,0,0-.875-.894h-2.12a.886.886,0,0,0-.875.894v.7H79.42a.357.357,0,0,0,0,.713Zm5.12-1.414a.18.18,0,0,1,.177-.181h2.12a.18.18,0,0,1,.177.181v.7H84.54v-.7Z"
                                                            transform="translate(-75.625 -6.558)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M97.759,267.576a.357.357,0,0,0-.357.357v3.15a.357.357,0,0,0,.357.357H99.2a.357.357,0,0,0,.356-.357v-3.15a.357.357,0,0,0-.356-.357Zm1.09,3.15h-.733v-2.437h.733Z"
                                                            transform="translate(-92.919 -255.218)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M166.594,229.248a.356.356,0,0,0-.357.357v4.972a.356.356,0,0,0,.357.357h1.446a.356.356,0,0,0,.357-.357V229.6a.356.356,0,0,0-.357-.357Zm1.09,4.972h-.733v-4.259h.733Z"
                                                            transform="translate(-158.585 -218.709)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M235.43,267.576a.357.357,0,0,0-.357.357v3.15a.357.357,0,0,0,.357.357h1.446a.357.357,0,0,0,.356-.357v-3.15a.356.356,0,0,0-.356-.357Zm1.09,3.15h-.733v-2.437h.733Z"
                                                            transform="translate(-224.253 -255.218)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M304.266,311.832a.356.356,0,0,0-.357.357v1.047a.356.356,0,0,0,.357.357h1.446a.357.357,0,1,0,0-.713h-1.09v-.69A.356.356,0,0,0,304.266,311.832Z"
                                                            transform="translate(-289.921 -297.373)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M305.641,155.861l-2.045-3.543a4.662,4.662,0,1,0-4.61,1.316,4.685,4.685,0,0,0,1.214.161,4.6,4.6,0,0,0,1.049-.121l2.045,3.543a1.355,1.355,0,1,0,2.347-1.355Zm-6.471-2.916a3.947,3.947,0,1,1,2.995-.394A3.921,3.921,0,0,1,299.17,152.945Zm5.618,4.149a.643.643,0,0,1-.877-.235l-1.967-3.408a4.679,4.679,0,0,0,1.112-.643l1.968,3.409a.642.642,0,0,1-.235.877Z"
                                                            transform="translate(-282.188 -137.969)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M328.919,175.632a3.374,3.374,0,0,0-.169-2.444.356.356,0,1,0-.645.3,2.67,2.67,0,1,1-.8-.995.356.356,0,1,0,.43-.569,3.385,3.385,0,1,0,1.189,3.7Z"
                                                            transform="translate(-307.682 -163.45)"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>

                                            <div
                                                className={write ?"btn-choice rounded selected redac":"btn-choice rounded redac"}
                                                data-target="#c-writing"
                                                onClick={handleClickWrite}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="31.899"
                                                    height="31.899"
                                                    viewBox="0 0 23.452 23.452"
                                                >

                                                    <g className="a">
                                                        <path
                                                            className="b"
                                                            d="M246.651,180.822h-2.813v-3.214a1.607,1.607,0,0,0-3.214,0v4.71l-.466-.555a1.607,1.607,0,1,0-2.461,2.062l3.021,3.6a2.009,2.009,0,0,0,1.112,1.259v2.179a.4.4,0,0,0,.4.4h5.625a.4.4,0,0,0,.4-.4v-2.179a2.009,2.009,0,0,0,1.205-1.839v-3.214A2.816,2.816,0,0,0,246.651,180.822Zm-8.525,1.9a.8.8,0,0,1,.285-.544.824.824,0,0,1,1.13.1l1.083,1.29v2.5l-2.312-2.758A.794.794,0,0,1,238.126,182.722Zm9.328,7.743h-4.822v-1.607h4.822Zm1.205-3.616a1.205,1.205,0,0,1-1.205,1.205h-4.822a1.205,1.205,0,0,1-1.205-1.205v-9.241a.8.8,0,1,1,1.607,0v5.223h.8v-1.205h1.205v1.205h.8v-1.205h.8a2,2,0,0,1,.4.04v1.567h.8v-1.195a2,2,0,0,1,.8,1.6Zm0,0"
                                                            transform="translate(-226.011 -167.816)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M14.212,130.382l2.009-.8a.4.4,0,0,0,0-.747l-2.009-.8a.4.4,0,0,0-.149-.028H1.205a1.205,1.205,0,0,0,0,2.411H14.063A.4.4,0,0,0,14.212,130.382Zm-.953-.775H2.411v-.8H13.259Zm1.731-.4-.927.371v-.742Zm-14.187,0a.4.4,0,0,1,.4-.4h.4v.8h-.4A.4.4,0,0,1,.8,129.205Zm0,0"
                                                            transform="translate(0 -121.766)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M64.8,203.652V192H64v11.652a1.205,1.205,0,0,0,1.205,1.205h11.25v-.8H65.205A.4.4,0,0,1,64.8,203.652Zm0,0"
                                                            transform="translate(-60.786 -183.012)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M64.8,1.205a.4.4,0,0,1,.4-.4h11.25V3.616a1.205,1.205,0,0,0,1.205,1.205h2.411v8.036h.8V4.432a.4.4,0,0,0-.1-.268L77.156.133a.4.4,0,0,0-.3-.133H65.205A1.205,1.205,0,0,0,64,1.205v4.42h.8ZM77.259,3.616V1.453l2.3,2.565h-1.9A.4.4,0,0,1,77.259,3.616Zm0,0"
                                                            transform="translate(-60.786)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M112,48h.8v.8H112Zm0,0"
                                                            transform="translate(-106.533 -45.589)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M144,48h3.214v.8H144Zm0,0"
                                                            transform="translate(-136.995 -45.589)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M112,80h4.822v.8H112Zm0,0"
                                                            transform="translate(-106.566 -76.095)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M112,200h8.036v.8H112Zm0,0"
                                                            transform="translate(-106.604 -190.238)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M112,248h8.036v.8H112Zm0,0"
                                                            transform="translate(-106.604 -235.895)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M112,296h5.625v.8H112Zm0,0"
                                                            transform="translate(-106.574 -281.552)"
                                                        />
                                                        <path
                                                            className="b"
                                                            d="M112,344h3.214v.8H112Zm0,0"
                                                            transform="translate(-106.551 -327.209)"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>

                                            <div
                                                className={translate ?"btn-choice rounded selected trad":"btn-choice rounded trad"}
                                                data-target="#c-translate"
                                                onClick={handleClickTranslate}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="31.899"
                                                    height="31.899"
                                                    viewBox="0 0 31.899 31.899"
                                                >

                                                    <path
                                                        className="a"
                                                        d="M29.282,11.215H20.52c.028-.307.043-.619.043-.933A10.284,10.284,0,0,0,5.144,1.374a.623.623,0,1,0,.624,1.079,9.036,9.036,0,1,1,4.514,16.864,8.934,8.934,0,0,1-5.666-2,.624.624,0,0,0-.574-.11l-1.654.432.648-1.424a.623.623,0,0,0-.063-.625,9.04,9.04,0,0,1-.514-9.836.623.623,0,1,0-1.078-.625,10.288,10.288,0,0,0,.373,10.894L.711,18.317a.623.623,0,0,0,.725.861l2.65-.693a10.279,10.279,0,0,0,7.628,1.977v5.456a2.62,2.62,0,0,0,2.616,2.617h8.812l3.94,3.223a.623.623,0,0,0,1.018-.482V28.535h1.184A2.62,2.62,0,0,0,31.9,25.918V13.831A2.62,2.62,0,0,0,29.282,11.215Zm1.371,14.7a1.372,1.372,0,0,1-1.371,1.371H27.476a.623.623,0,0,0-.623.623v2.049l-3.077-2.518c-.17-.155-.318-.155-.652-.155H14.329a1.372,1.372,0,0,1-1.37-1.371v-5.71a10.316,10.316,0,0,0,7.37-7.747h8.953a1.372,1.372,0,0,1,1.371,1.371Zm0,0"
                                                        transform="translate(0)"
                                                    />
                                                    <path
                                                        className="a"
                                                        d="M295,256.761a.677.677,0,0,0-.289-1.291h-.277l-2.186-4.982a.678.678,0,0,0-1.242,0l-2.186,4.982h-.277a.677.677,0,0,0-.289,1.291l-.814,1.856a.678.678,0,1,0,1.241.545l1.025-2.335h3.842l1.025,2.335a.678.678,0,1,0,1.241-.545Zm-4.7-1.291,1.326-3.023,1.326,3.023Zm0,0"
                                                        transform="translate(-269.991 -235.017)"
                                                    />
                                                    <path
                                                        className="a"
                                                        d="M46.08,46.754a.678.678,0,1,0-.479-.2A.684.684,0,0,0,46.08,46.754Zm0,0"
                                                        transform="translate(-42.325 -42.321)"
                                                    />
                                                    <path
                                                        className="a"
                                                        d="M100.485,94.918a.678.678,0,1,0,.652,1.189,7.763,7.763,0,0,0,3.355-3.639,7.765,7.765,0,0,0,3.355,3.639.678.678,0,1,0,.652-1.189,6.411,6.411,0,0,1-3.256-4.665h3.01a.678.678,0,0,0,0-1.356H105.17V86.072a.678.678,0,0,0-1.356,0V88.9h-2.449a.678.678,0,0,0,0,1.356h2.376A6.411,6.411,0,0,1,100.485,94.918Zm0,0"
                                                        transform="translate(-94.081 -80.286)"
                                                    />
                                                </svg>
                                            </div>
                                            <div
                                                className="complementary-box__bloc graph"
                                            >
                                                <p className="complementary-box__title">
                                                    Graphisme
                                                </p>
                                                <p className="complementary-box__text">
                                                    Texte de norme pour l’intégration du
                                                    modèle Profitez de l’expertise de notre
                                                    équipe.
                                                </p>
                                            </div>
                                            <div
                                                className="complementary-box__bloc migr"
                                            >
                                                <p className="complementary-box__title">
                                                    Migration
                                                </p>
                                                <p className="complementary-box__text">
                                                    Texte de norme pour l’intégration du
                                                    modèle Profitez de l’expertise de notre
                                                    équipe.
                                                </p>
                                            </div>
                                            <div
                                                className="complementary-box__bloc redac"
                                            >
                                                <p className="complementary-box__title">
                                                    Rédaction
                                                </p>
                                                <p className="complementary-box__text">
                                                    Texte de norme pour l’intégration du
                                                    modèle Profitez de l’expertise de notre
                                                    équipe.
                                                </p>
                                            </div>
                                            <div
                                                className="complementary-box__bloc trad"
                                            >
                                                <p className="complementary-box__title">
                                                    Traduction
                                                </p>
                                                <p className="complementary-box__text">
                                                    Texte de norme pour l’intégration du
                                                    modèle Profitez de l’expertise de notre
                                                    équipe.
                                                </p>
                                            </div>
                                        </div>
                                    </>
                            }



                        </div>

                        <div className="aside__logout">
                            <a href="">
                                <img src="/img/cms/logout.svg" alt=""/>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-7 bg-grey content">
                        <div className={"shop"} onClick={handleShop}>
                            <img src={"/img/icons/cart.png"}/>
                        </div>
                        {shop &&
                        <>
                            <div className={"container-shop"}>
                                <div className={"cross"}>
                                    Récapitulatif
                                    <div onClick={handleCross}>
                                        <i className={"fas fa-times"}></i>
                                    </div>
                                </div>
                                <div className={"content-line"}>
                                    <div>
                                        <p>
                                            Application 1
                                        </p>
                                    </div>
                                    <div className={"value"}>
                                        16.90
                                    </div>
                                </div>
                                <div className={"content-line"}>
                                    <div>
                                        <p>
                                            Application 2
                                        </p>
                                    </div>
                                    <div className={"value"}>
                                        16.90
                                    </div>
                                </div>
                                <div className={"content-line"}>
                                    <div>
                                        <p>
                                            Application 3
                                        </p>
                                    </div>
                                    <div className={"value"}>
                                        16.90
                                    </div>
                                </div>
                                <div className={"validate"}>
                                    Valider
                                </div>
                            </div>
                        </>
                        }

                        <div className="content__top-bar">
                            <div className="website-info">
                                <div className={"first-line"}>
                                    <p className="website-info__title">Titre du site</p>
                                    <div className="website-info__content">
                                        <p className="website-info__url">
                                            www.titredusite
                                        </p>
                                        <div
                                            className="form-group select select-grey website-info__extension"
                                        >
                                            <select className="form-control">
                                                <option value="com">.com</option>
                                                <option value="fr">.fr</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <hr className={"separator"}/>
                                <div className={"second-line"}>
                                    {
                                        multilangue ?
                                            <>
                                                <div className={"little-box"}>
                                                    <div className={"title"}>
                                                        Multilingue
                                                        <img src={"/img/with-banner/dashboard/tab-2.svg"}
                                                             className={"tab"}
                                                             onClick={handleMultilangue}
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className={"box"}>
                                                    <div className={"title"}>
                                                        Multilingue
                                                        <img src={"/img/with-banner/dashboard/tab.svg"}
                                                             className={"tab"}
                                                             onClick={handleMultilangue}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <img src={"/img/with-banner/dashboard/loupe.svg"}/>
                                                        <input
                                                            type="text"
                                                            id="link"
                                                            name="search"
                                                            required={true}
                                                            className="form-control"
                                                            placeholder={"Rechercher"}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="language">Français
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                        <label className="language">Anglais
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                        <label className="language">Allemand
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                        <label className="language">Espagnol
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                        <label className="language">Italien
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                        <label className="language">Portugais
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>

                                                    </div>
                                                </div>
                                            </>
                                    }
                                    {
                                        theme ?
                                            <>
                                                <div className={"little-box"}>
                                                    <div className={"title"}>
                                                        Thème
                                                        <img src={"/img/with-banner/dashboard/tab-2.svg"}
                                                             className={"tab"}
                                                             onClick={handleTheme}
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className={"box"}>
                                                    <div className={"title"}>
                                                        Thème
                                                        <img src={"/img/with-banner/dashboard/tab.svg"}
                                                             className={"tab"}
                                                             onClick={handleTheme}
                                                        />
                                                    </div>
                                                    <div className={"variant"}>
                                                        <div className={"grey-box"}/>
                                                        Variante 1
                                                    </div>
                                                    <div className={"variant"}>
                                                        <div className={"grey-box"}/>
                                                        Variante 1
                                                    </div>
                                                    <div className={"variant"}>
                                                        <div className={"grey-box"}/>
                                                        Variante 1
                                                    </div>
                                                    <div className={"variant"}>
                                                        <div className={"grey-box"}/>
                                                        Variante 1
                                                    </div>
                                                    <div className={"variant"}>
                                                        <div className={"grey-box"}/>
                                                        Variante 1
                                                    </div>
                                                </div>
                                            </>
                                    }


                                </div>


                            </div>

                            <div className="content__right-part">
                                <div className="help">
                                    <button type="button" className="help__btn" onClick={handleHelp}>
                                        ?
                                    </button>
                                    {
                                        help &&
                                            <>
                                                <div className="help__modal">
                                                    <div className="help__part">
                                                        <p className="help__number">1</p>
                                                        <div className="help__content">
                                                            <p className="help__text">
                                                                Texte de norme pour
                                                                l’intégration du modèle
                                                                Profitez de l’expertise de
                                                                notre équipe et du
                                                                savoir-faire de nos
                                                                rédacteurs professionnels
                                                                pour faire rédiger vos
                                                                textes, rapidement et sans
                                                                effort norme
                                                            </p>
                                                            <hr className="help__separator"/>
                                                        </div>
                                                    </div>

                                                    <div className="help__part">
                                                        <p className="help__number">2</p>
                                                        <div className="help__content">
                                                            <p className="help__text">
                                                                Texte de norme pour
                                                                l’intégration du modèle
                                                                Profitez de l’expertise de
                                                                notre équipe et du
                                                                savoir-faire de nos
                                                                rédacteurs professionnels
                                                                pour faire rédiger vos
                                                                textes, rapidement et sans
                                                                effort norme
                                                            </p>
                                                            <hr className="help__separator"/>
                                                        </div>
                                                    </div>

                                                    <div className="help__part">
                                                        <p className="help__number">3</p>
                                                        <div className="help__content">
                                                            <p className="help__text">
                                                                Texte de norme pour
                                                                l’intégration du modèle
                                                                Profitez de l’expertise de
                                                                notre équipe et du
                                                                savoir-faire de nos
                                                                rédacteurs professionnels
                                                                pour faire rédiger vos
                                                                textes, rapidement et sans
                                                                effort norme
                                                            </p>
                                                            <hr className="help__separator"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                    }


                                </div>

                                <div className="top-bar__menu nav">
                                    <img
                                        className="open-nav burger"
                                        src="/img/menu-black.svg"
                                        alt=""
                                        onClick={toggleMenuOpen}
                                    />

                                    <div
                                        className="nav-menu"
                                        style={{ display: isOpen ? "block" : "none" }}
                                    >
                                        <div className="close">
                                            <img src="/img/close.svg" alt="" onClick={toggleMenuOpen} />
                                        </div>
                                        <div className="nav-content">
                                            <ul>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        Lien 1
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        Lien 2
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        Lien 3
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        Lien 4
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        Lien 5
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        Lien 6
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        Lien 7
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        Lien 8
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        Lien 9
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        Lien 10
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row top-gap">

                            <div className={"content__all-site-items"}>
                                <ul className="tree horizontal">
                                    <li>
                                        {data && data.filter(item => item.path === "/").filter(item=>item.currentState !=="REMOVED").map((item) =>
                                            <Card key={item.id} id={item.id} name={item.name.en}
                                                   item={item}  putPageData={putPageData}
                                                   add={true} changeName={changeName} handleAddPage={handleAddPage}
                                            data={data} siteID={siteId}/>

                                        )}

                                        <ul>
                                            {
                                                data && data.filter(item => item.path !== "/").map((item) =>

                                                            <Card key={item.id} id={item.id} name={item.name.en}
                                                             item={item} putPageData={putPageData}
                                                                  changeName={changeName} deletePageData={deletePageData}
                                                                  data={data} activePageData={activePageData} siteID={siteId}
                                                            />


                                                )
                                            }
                                            {
                                                addOpen &&
                                                <li>
                                                    <div className={"site-item"}>
                                                        <div className={"site-content child-level-1"}>
                                                            <div>
                                                                <form className={"add_children"}>
                                                                    <input  type="text" name="newnamepage" value={name} onChange={handleChange} placeholder={"Nom de la page"}/>
                                                                    <div
                                                                        className="projects-and-models__choice form-group select"
                                                                    >
                                                                        <select className="form-control" onChange={handleChangeModel}>
                                                                            <option selected disabled>
                                                                                Type de page
                                                                            </option>
                                                                            <option  value={"7bcfeb0d-ecd3-4d78-be2a-8125f1b9361d"}
                                                                            >About
                                                                            </option
                                                                            >
                                                                            <option value={"a9764d28-7519-42b4-bdef-4f5d6c565a9a"}>
                                                                                Events
                                                                            </option>
                                                                            <option value={"694dc3ea-26c6-4151-b5a0-c9ae319265b9"}>
                                                                                Contact
                                                                            </option>
                                                                            <option value={"700e32e4-3fce-4af8-acd4-8b0d308bfac1"}>
                                                                                Legal
                                                                            </option>
                                                                            <option value={"85405841-a951-48fb-993f-5229d2f28c26"}>
                                                                                Privacy
                                                                            </option>
                                                                            <option value={"f6a7d1ee-b29a-4176-84f8-6acaba557d10"}>
                                                                                Pro
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                    <button type="submit"  onClick={handleSubmit}>
                                                                        Valider
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            }


                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Content;
