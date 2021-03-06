
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

    //~ ---------------------------------------- 
    //~ -------- Navigation accueil ------------ 
    //~ ---------------------------------------- 
    export const accueilAnimeNavigation :any = {
        initial       : {y : -250},
        animate       : {y : 0}
    };
//~ ----------------------------------------------------




//~ ----------------------------------------------------
//~ |                    SIDEBAR                       | 
//~ ----------------------------------------------------
    export const sideBarAnime :any = {                 
                                                        //-  condition au clique
        open        : { opacity  : 1,
                        x        : "-900px"
                    },
        closed     : {
                        opacity  : 0,
                        x        : 0, 
                    },
        duration   : {
                        type     : 'tween'
                    }               
    };
//~ ----------------------------------------------------


//~ ----------------------------------------------------
//~ |                     AUTRE                        | 
//~ ----------------------------------------------------
export const animeTransitionPages :any = {
    initial : {opacity : 0},
    animate : {opacity : 1},
    exit    : {opacity : 0}
};
//~ ----------------------------------------------------

//~ --------------------------------------------------------
//~ ########################################################