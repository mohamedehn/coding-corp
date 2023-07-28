import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowLeftIcon } from '@heroicons/react/24/outline'


export default function Mentions() {
    return(
        <div className="h-auto bg-[#1b1e3d]">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-20">
                <div className="pt-20">
                    <Link
                        href="/"
                        className="text-3xl font-bold tracking-tight text-white sm:text-3xl text-justify flex">
                        <ArrowLeftIcon className="h-10 flex mr-4"/> Retour
                    </Link> 
                </div>
                <div className="mx-auto lg:mx-0 pt-20">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Mention légales</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-200 text-justify">
                        1 - PROPRIÉTÉ <br/>
                        Le présent site est la propriété de Coding Corp <br/>
                        Siège social : 7 Impasse de la Boutas 38090 Villefontaine <br/>
                        Email : contact@codingcorp.fr <br/>
                        Entreprise créée en 2023 – Code 62.01Z - SIRET : 953 263 423 00014 <br/>
                        Toute reproduction même partielle est interdite sans autorisation préalable. <br/>
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-200 text-justify">
                        2 - PRESTATAIRES <br/>
                        Création / Conception / Développement : <br/>
                        Nom entreprise : Coding Corp <br/>
                        SIRET : 953 263 423 00014 <br/>
                        Email : contact@codingcorp.fr <br/>
                        Web : http://codingcorp.fr/ <br/>
                        Hébergement : Hostinger <br/>
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center pt-24">Politique de confidentialité</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-200 text-justify"> 
                        Les internautes accédant au site http://codingcorp.fr/ peuvent être amenés à fournir des informations nominatives ou 
                        à caractère personnel dans le cadre des services proposés par Coding Corp.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-200 text-justify">
                    L’entreprise Coding Corp est responsable de traitement au sens du Règlement (UE) 2016/679 dit Règlement Général pour la Protection 
                    des Données ou « RGPD », pour la collecte et le traitement des données à caractère personnel effectuées sur le site 
                    accessible à l’adresse URL : http://codingcorp.fr/
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-200 text-justify">
                        L’entreprise Coding Corp traite les données personnelles collectées via son site pour les finalités suivantes :
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-200 text-justify">
                        - Afin de permettre au visiteur du site d’obtenir des informations sur les services proposés par l&apos;entreprise Coding 
                        Corp et les conditions d’éligibilité.<br/>
                        Conformément au RGPD, le visiteur du site dispose sur ses données personnelles des droits suivants :<br/>
                        - Un droit d’accès<br/>
                        - Un droit de rectification<br/>
                        - Un droit d’effacement<br/>
                        - Le cas échéant, d’un droit à la portabilité de ses données<br/>
                        - Un droit de demander la limitation du traitement de ses données et/ ou de s’y opposer<br/>
                        - Le cas échéant, un droit de retirer son consentement<br/>
                        - Un droit de définir des directives relatives au sort de ses données après sa mort<br/>
                        Le visiteur peut exercer ses droits en envoyant soit :<br/>
                        - Un courriel au Responsable de Traitement de Coding Corp<br/>
                        - Un courrier à l’attention du Responsable de Traitement à l’adresse suivante :<br/>
                        Coding Corp<br/>
                        7 Impasse de la Boutas<br/>
                        38090 Villefontaine<br/>
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-200 text-justify">
                        Si le visiteur estime que Coding Corp n’a pas correctement répondu à ses sollicitations, il dispose d’un droit d’introduire 
                        une réclamation auprès de la CNIL. Coding Corp limite la collecte des données personnelles au strict nécessaire au regard 
                        des finalités des traitements de données, elles sont destinées à l’entreprise Coding Corp mais sont susceptibles d’être 
                        transférées à des organismes publics afin de mieux répondre à la demande du visiteur.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-200 text-justify">
                        Les données ne sont en aucun cas communiquées, ni vendues, ni cédées, louées et / ou commercialisées à des tiers au sens 
                        du RGPD.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-200 text-justify">
                        Les données sont stockées exclusivement sur le territoire Français et ne font l’objet d’aucun transfert en dehors de 
                        l’Union Européenne.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-200 text-justify">
                        Les données seront conservées tant que le visiteur souhaite recevoir des informations, et le temps nécessaire à la 
                        gestion de sa demande.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-200 text-justify">
                        Coding Corp veille à ce que toutes les mesures techniques et organisationnelles afin de protéger les données personnelles 
                        soient mises en œuvre, ces règles de confidentialités et de sécurité sont également imposées à l’ensemble du personnel de 
                        Coding Corp, ainsi qu’à tous les prestataires et sous-traitants travaillant pour Coding Corp.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
};