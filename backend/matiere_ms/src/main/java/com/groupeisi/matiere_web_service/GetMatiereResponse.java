//
// Ce fichier a été généré par Eclipse Implementation of JAXB, v3.0.0 
// Voir https://eclipse-ee4j.github.io/jaxb-ri 
// Toute modification apportée à ce fichier sera perdue lors de la recompilation du schéma source. 
// Généré le : 2025.01.02 à 04:09:02 PM UTC 
//


package com.groupeisi.matiere_web_service;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour anonymous complex type.
 * 
 * <p>Le fragment de schéma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="matiere" type="{http://groupeisi.com/matiere-web-service}Matiere"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "matiere"
})
@XmlRootElement(name = "getMatiereResponse")
public class GetMatiereResponse {

    @XmlElement(required = true)
    protected Matiere matiere;

    /**
     * Obtient la valeur de la propriété matiere.
     * 
     * @return
     *     possible object is
     *     {@link Matiere }
     *     
     */
    public Matiere getMatiere() {
        return matiere;
    }

    /**
     * Définit la valeur de la propriété matiere.
     * 
     * @param value
     *     allowed object is
     *     {@link Matiere }
     *     
     */
    public void setMatiere(Matiere value) {
        this.matiere = value;
    }

}
