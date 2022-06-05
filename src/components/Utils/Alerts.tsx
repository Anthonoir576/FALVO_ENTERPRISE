
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import swal from "sweetalert";
//- --------------------------------------------------------
//- ########################################################




//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################

//~ --------------------------------------------
//~ ALERT COPIER PRESSE PAPIER SUR LA PARTIE CONTACT
//~ --------------------------------------------
export const alertAdress = () => {
    return swal("Adresse copier !", "Vous pouvez maintenant coller la sélection", "success");
};
export const alertEmail = () => {
    return swal("E-mail copier !", "Vous pouvez maintenant coller la sélection", "success");
};
export const alertPhoneNumber = () => {
    return swal("Téléphone copier !", "Vous pouvez maintenant coller la sélection", "success");
};
//~ --------------------------------------------



//~ --------------------------------------------
//~   ALERT EMAIL ENVOYE SUR LA PARTIE CONTACT
//~ --------------------------------------------
export const alertMailEnvoyer = (contenu? :string | undefined) => {
    return swal(`${contenu}`, "FALVO ENTERPRISE vous répondra sous 48H", "success");
};
//~ --------------------------------------------



//~ --------------------------------------------
//~      ALERT CONTENU DES CARTES PROJETS
//~ --------------------------------------------
export const alertContenuProjet = (contenu? :any, titre? :any) => {
    return swal({
            text: `${contenu}`,
            title: `${titre}`,
           });
}; 
//~ --------------------------------------------

//~ --------------------------------------------------------
//~ ########################################################
