import mongoose from 'mongoose';

const { Schema } = mongoose;

const tramiteSchema = new Schema({
  //Descripción, Fecha de Alta, Fecha de Cierre, DNI de la persona, Tipo de Trámite.
  descripcion: {
    type: String,
    required: true,
  },
  fAlta: {
    type: Date,
    default: Date.now,
    required: true,
  },
  fBaja: {
    type: Date,
    default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
    trim: true,
    required: true,
  },
  autor: {
    type: Schema.Types.ObjectId,
    ref: 'Persona',
  },
  tipo: {
    type: String,
    required: true,
    default: 'Particular',
    trim: true,
  },
  codigo: {
    type: String,
  },
});

export const Tramite = mongoose.model('Tramite', tramiteSchema);
