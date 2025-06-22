const db = require("../config/db");

//Importer les modeles
const CommanderDocs = require("./CommanderDoc");
const DocsAcademiques = require("./DocsAcademiques");
const EC = require("./EC");
const Enseignants = require("./Enseignants");
const Etudiants = require("./Etudiants");
const Evaluations = require("./Evaluations");
const FraisAcademiques = require("./FraisAcademiques");
const Inscriptions = require("./Inscriptions");
const OptionsEtud = require("./OptionsEtud");
const PayerFraisAcademiques = require("./PayerFraisAcademiques");
const ProgrammerCours = require("./ProgrammerCours");
const PromotionsEtudiant = require("./PromotionsEtudiant");
const SectionsEtudiants = require("./SectionsEtudiants");
const SessionsEtudes = require("./SessionsEtudes");
const UE = require("./UE");
const GradeEnseignant = require("./GradeEnseignant");
const AvoirGrade = require("./AvoirGrade");

//Définition des rélations Commander Document
CommanderDocs.belongsTo(Etudiants,{foreignKey:"matrEtud"});
CommanderDocs.belongsTo(DocsAcademiques,{foreignKey:"idDoc"});
CommanderDocs.belongsTo(OptionsEtud,{foreignKey:"codeOpt"});
Etudiants.hasMany(CommanderDocs,{foreignKey:"matrEtud"});
DocsAcademiques.hasMany(CommanderDocs,{foreignKey:"idDoc"});
OptionsEtud.hasMany(CommanderDocs,{foreignKey:"codeOpt"});


//Définition des rélations EC
EC.belongsTo(UE,{foreignKey:"codeUE"});
UE.hasMany(EC,{foreignKey:"codeUE"});

//Définition des rélations Evalutaions

Evaluations.belongsTo(EC,{foreignKey:"codeEC"});
Evaluations.belongsTo(Etudiants,{foreignKey:"matrEtud"});
Evaluations.belongsTo(Enseignants,{foreignKey:"matrEns"});
Evaluations.belongsTo(SessionsEtudes,{foreignKey:"codeSess"});

EC.hasMany(Evaluations,{foreignKey:"codeEC"});
Etudiants.hasMany(Evaluations,{foreignKey:"matrEtud"});
Enseignants.hasMany(Evaluations,{foreignKey:"matrEns"});
SessionsEtudes.hasMany(Evaluations,{foreignKey:"codeSess"});

//Définition des rélations de l'Inscriptions

Inscriptions.belongsTo(Etudiants,{foreignKey:"matrEt"});
Inscriptions.belongsTo(OptionsEtud,{foreignKey:"codeOpt"});
Inscriptions.belongsTo(PromotionsEtudiant,{foreignKey:"codePro"});

Etudiants.hasMany(Inscriptions,{foreignKey:"matrEtud"});
OptionsEtud.hasMany(Inscriptions,{foreignKey:"codeOpt"});
PromotionsEtudiant.hasMany(Inscriptions,{foreignKey:"codePro"});

//Déclaration des rélation Options
OptionsEtud.belongsTo(SectionsEtudiants,{foreignKey:"codeSect"});

SectionsEtudiants.hasMany(OptionsEtud,{foreignKey:"codeSect"});

//Définition des Rélations PayerFrais
PayerFraisAcademiques.belongsTo(FraisAcademiques,{foreignKey:"idFrais"});
PayerFraisAcademiques.belongsTo(Etudiants,{foreignKey:"matrEtud"});
PayerFraisAcademiques.belongsTo(PromotionsEtudiant,{foreignKey:"codePro"});

FraisAcademiques.hasMany(PayerFraisAcademiques,{foreignKey:"idFrais"});
Etudiants.hasMany(PayerFraisAcademiques,{foreignKey:"matrEtud"});
PromotionsEtudiant.hasMany(PayerFraisAcademiques,{foreignKey:"codePro"});

//Définition des rélations ProgrammerCours
ProgrammerCours.belongsTo(Enseignants,{foreignKey:"matrEns"});
ProgrammerCours.belongsTo(EC,{foreignKey:"codeEC"});
ProgrammerCours.belongsTo(PromotionsEtudiant,{foreignKey:"codePro"});

Enseignants.hasMany(ProgrammerCours,{foreignKey:"matrEns"});
EC.hasMany(ProgrammerCours,{foreignKey:"codeEC"});
PromotionsEtudiant.hasMany(ProgrammerCours,{foreignKey:"codePro"});

//Définition des rélations Promotions
PromotionsEtudiant.belongsTo(OptionsEtud,{foreignKey:"codeOpt"});

OptionsEtud.hasMany(PromotionsEtudiant,{foreignKey:"codeOpt"});

//Définition des relations Sessions
SessionsEtudes.belongsTo(PromotionsEtudiant,{foreignKey:"codePro"});

PromotionsEtudiant.hasMany(SessionsEtudes,{foreignKey:"codePro"});

//Définition des rélations UE
UE.belongsTo(SessionsEtudes,{foreignKey:"codeSess"});
UE.belongsTo(OptionsEtud,{foreignKey:"codeOpt"});

OptionsEtud.hasMany(UE,{foreignKey:"codeOpt"});
SessionsEtudes.hasMany(UE,{foreignKey:"codeSess"});

//Déclaration des réalations AvoirGrade
AvoirGrade.belongsTo(GradeEnseignant,{foreignKey:"codeGrade"});
AvoirGrade.belongsTo(Enseignants,{foreignKey:"matrEns"});

GradeEnseignant.hasMany(AvoirGrade,{foreignKey:"codeGrade"});
Enseignants.hasMany(AvoirGrade,{foreignKey:"matrEns"});


//Exportation des Tables

module.exports = {
    db,
    CommanderDocs,
    DocsAcademiques,
    EC,
    Enseignants,
    Etudiants,
    Evaluations,
    FraisAcademiques,
    Inscriptions,
    OptionsEtud,
    PayerFraisAcademiques,
    ProgrammerCours,
    PromotionsEtudiant,
    SectionsEtudiants,
    SessionsEtudes,
    UE,
    GradeEnseignant,
    AvoirGrade
}