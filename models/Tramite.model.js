import mongoose from 'mongoose';
// import bcryptjs from 'bcryptjs';

const { Schema, model } = mongoose;

const tramiteSchema = new Schema({
  //Descripción, Fecha de Alta, Fecha de Cierre, DNI de la persona, Tipo de Trámite.
  descripcion: {
    type: String,
    required: true,
  },
  fAlta: {
    type: Date,
    default: new Date(),
    required: true,
  },
  fBaja: {
    type: Date,
    default: new Date(),
  },
  dniAutor: {
    type: Number,
    required: true,
    trim: true,
  },
  tipo: {
    type: String,
    required: true,
    trim: true,
  },
});

export const Tramite = mongoose.model('Tramite', userSchema);
