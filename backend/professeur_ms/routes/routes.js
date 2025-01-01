const express = require("express");
const router = express.Router();

const professeurController = require("./professeurs/professeur.controller");

router.get('/v1/professeurs', professeurController.listProfesseurs);
router.get('/v1/professeur/:id' ,  professeurController.getProfesseur);
router.post('/v1/professeur', professeurController.createProfesseur );
router.put('/v1/professeur/:id' , professeurController.updateProfesseur);
router.delete('/v1/professeur/:id' , professeurController.deleteProfesseur);
//router.get('/user/getAdmins' , authController.authenticateToken , userController.getAdmins );

module.exports = router;
