import mongoose from 'mongoose';

const { Schema } = mongoose;

const personaSchema = new Schema({
  //Nombre, Apellido, DNI, Fecha de Nacimiento, Email y Teléfono.
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
  },
  dni: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  fnacim: {
    type: Date,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
  },
  telefono: {
    type: Number,
    trim: true,
  },
});

export const Persona = mongoose.model('Persona', personaSchema);
