'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Anamnese extends Model {

  anamnese () {
    return this.belongsTo('App/Models/MedicalRecord')
  }

}

module.exports = Anamnese
