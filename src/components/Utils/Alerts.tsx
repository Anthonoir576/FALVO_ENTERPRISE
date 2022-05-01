
import swal from "sweetalert";



// ALERT COPIER PRESSE PAPIER SUR LA PARTIE CONTACT
export const alertAdress = () => {
    return swal("Adresse copier !", "Vous pouvez maintenant coller la sélection", "success");
};
export const alertEmail = () => {
    return swal("E-mail copier !", "Vous pouvez maintenant coller la sélection", "success");
};
export const alertPhoneNumber = () => {
    return swal("Téléphone copier !", "Vous pouvez maintenant coller la sélection", "success");
};



// ALERT CONTENU DES CARTES PROJETS
export const alertContenuProjet = (contenu? :any) => {
    return swal({
                text: contenu,
           });
};