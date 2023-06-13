import { useState } from 'react'
import {Link} from 'react-router-dom'
import { createTask } from '../lib/pocketbase';
import { useNavigate } from 'react-router-dom';

function Create() {

  const [name, setname] = useState(null);
  const [color, setcolor] = useState(null);
  const [estado, setestado] = useState(null);
  const [Modelo, setModelo] = useState(null);
  const [Marca, setMarca] = useState(null);
  const [Linea, setLinea] = useState(null);
  const [descripcion, setdecripcion] = useState(null);
  

  const handleSubmit = ()=>{
    if(!title){
      window.alert("submit the title please");
      return
    }
    createTask(title)}
  }
