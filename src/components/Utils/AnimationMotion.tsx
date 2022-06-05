
//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################


//~ ----------------------------------------------------
//~ |                    ACCUEIL                       | 
//~ ----------------------------------------------------

    //~ ---------------------------------------- 
    //~ ---------- PHOTO DE PROFILE ------------ 
    //~ ---------------------------------------- 
    export const accueilAnimePictureProfile :any = [
        {                                                //-  Animate
            x         : 0,
            y         : [0, 100, 100, 0], 
            scale     : 1, 
            opacity   : 1,
            rotate    : 0
        },      
        {                                                //-  initial
            x         : 100,
            y         : 0,
            scale     : 0,
            opacity   : 0,
            rotate    : 180
        },    
        {                                               //-  transition
            duration  : 1,
            repeat    : Infinity
        }                                            
    ];
    
    //~ ---------------------------------------- 
    //~ ----- txt effet + h2 + btn contact ----- 
    //~ ---------------------------------------- 
    export const accueilAnimeTxt01 :any = [
        {                                               //-  Animate
            x        : 0, 
            scale    : 1,
            opacity  : 1
        },                 
        {
            x        : -150,
            scale    : 0.5,
            opacity  : 0
        },                                              //-  initial
        {
            duration : 0.35
        }                                               //-  transition
    ];
    export const accueilAnimeTxt02 :any = [
        {                                               //-  Animate
            x        : 0, 
            scale    : 1,
            opacity  : 1
        },                 
        {
            x        : -150,
            scale    : 0.5,
            opacity  : 0
        },                                              //-  initial
        {
            duration : 0.45
        }                                               //-  transition
    ];
    export const accueilAnimeTxt03 :any = [
        {                                               //-  Animate
            x        : 0, 
            scale    : 1,
            opacity  : 1
        },                 
        {
            x        : -150,
            scale    : 0.5,
            opacity  : 0
        },                                              //-  initial
        {
            duration : 0.55
        }                                               //-  transition
    ];
//~ ----------------------------------------------------




//~ --------------------------------------------------------
//~ ########################################################