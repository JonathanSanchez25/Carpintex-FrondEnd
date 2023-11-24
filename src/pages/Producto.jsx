import { useEffect, useState } from 'react'
import TablePaginationComponet from '../components/TablePaginationComponet'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';


const countries = [
  {
    name: "India",
    code: "IN",
    population: 1324171354,
    size: 3287263,
  },
  {
    name: "China",
    code: "CN",
    population: 1403500365,
    size: 9596961
  },
  {
    name: "Italy",
    code: "IT",
    population: 60483973,
    size: 301340
  },
  {
    name: "India",
    code: "IN2",
    population: 1324171354,
    size: 3287263
  },
];

const produc = [
  {
    "id": 1,
    "nombre": "Escritorio de Roble",
    "descripcion": "Escritorio de madera de roble sólido con acabado natural. Incluye tres cajones y espacio adicional para el almacenamiento. Ideal para oficinas o estudios en casa.",
    "stock": 10,
    "altura": 120,
    "ancho": 60,
    "largo": 75,
    "imagen": null,
    "total": 2999.99,
    "estatus": 1
  },
  {
    "id": 2,
    "nombre": "Mesa de Comedor Rectangular",
    "descripcion": "Elegante mesa de comedor con diseño rectangular.",
    "stock": 15,
    "altura": 0.75,
    "ancho": 1.2,
    "largo": 2,
    "imagen": null,
    "total": 350,
    "estatus": 1
  },
]

const columnsProduct = [
    { id: "id", label: "Id", minWidth: 170},
    { id: "nombre", label: "Nombre", minWidth: 170 },
    { id: "descripcion", label: "Descripcion", minWidth: 100 },
    {
      id: "stock",
      label: "Stock",
      minWidth: 170,
      align: "right",
     
    },
    {
      id: "altura",
      label: "Altura",
      minWidth: 170,
      align: "right",
      
    },
    {
      id: "ancho",
      label: "Ancho",
      minWidth: 170,
      align: "right",
     
    },
    {
    id: "imagen",
    label: "Imagen",
    minWidth: 170,
    align: "right",
  },
    {
      id: "largo",
      label: "Largo",
      minWidth: 170,
      align: "right",
     
    },
    {
      id: "total",
      label: "Total",
      minWidth: 170,
      align: "right",
     
    },
    {
      id: "estatus",
      label: "Estatus",
      minWidth: 170,
      align: "right",
     
    },
    {
      id: "Acciones",
      label: "Acciones",
      minWidth: 170,
      align: "center",
    },
    
  ];

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
   
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
   
  },
  {
    id: "Acciones",
    label: "Acciones",
    minWidth: 170,
    align: "center",
  },
  
  
];



const Producto = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
  const [data, setData] = useState({});

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const deleteHandler = (id) => {
    console.log("eliminar:"+id);
  };

  const editHandler = (row) => {
    console.log(row);
    setData(row);
    setModalOpenEdit(true);
  }

  return (

     <div  className="col-9">
      <h1>Gestion Producto</h1>
      <button type="button" className="btn btn-primary" onClick={handleOpenModal}>Nuevo</button>
      <FormModal open={modalOpen} onClose={handleCloseModal} />
      <FormModalEdit open={modalOpenEdit} onClose={() => setModalOpenEdit(false)} data={data} />
      {/* Aquí irá el contenido principal de tu aplicación */}
      <TablePaginationComponet columTable={columnsProduct} dataBody={produc} deleteHandler={deleteHandler} editHandler={editHandler}/>
    </div>

    
  )
}

export default Producto

const FormModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    // Define aquí los campos de tu formulario
    nombre: '',
    descripcion: '',
    stock: '',
    altura: '',
    ancho: '',
    largo: '',
    imagen: '',
    total: '',
    estatus: '',
    // Otros campos
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //imagen manejo
  const [base64Image, setBase64Image] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        setBase64Image(base64String);
      };

      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose(); // Cierra el modal
    
    // Validación de datos (puedes implementar tu propia lógica aquí)
    if (!formData.nombre ) {
      // Muestra una alerta de error si los datos no son válidos
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos.',
        
      });
      
    }

    // Pregunta al usuario si desea confirmar el formulario
    const confirmacion = await Swal.fire({
      icon: 'question',
      title: 'Confirmar',
      text: '¿Estás seguro de enviar el formulario?',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar',
      cancelButtonText: 'Cancelar',
    });

    if (confirmacion.isConfirmed) {
      // Datos válidos y confirmación positiva, envía el formulario
      // Agrega aquí la lógica para manejar el envío del formulario
      console.log('Datos del formulario:', formData);
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Formulario enviado con éxito.',
      });
      onClose(); // Cierra el modal después de enviar el formulario
    }
  };

  return (
    <Modal open={open} onClose={onClose} style={{overflow: "scroll"}}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <h2 className='mt-5'>Nuevo Producto</h2>
        <form onSubmit={handleSubmit}>
          {/* Define aquí los campos de tu formulario */}
          <TextField name="nombre" label="Nombre" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="descripcion" label="Descripcion" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="stock" label="Stock" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="altura" label="Altura" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="ancho" label="Ancho" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="largo" label="Largo" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="total" label="Total" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <Input type="file"
          inputProps={{ accept: 'image/*' }} name="imagen" label="Imagen" fullWidth sx={{ mb: 2 }} onChange={handleFileChange} />
          
           {
            base64Image && (
              <img src={base64Image} alt="imagen" width="auto" height="150px" style={{marginBottom: '10px'}}/>
            )
           }
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Enviar
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

const FormModalEdit = ({ open, onClose,data }) => {
  const [formData, setFormData] = useState({
    // Define aquí los campos de tu formulario
    nombre: '',
    descripcion: '',
    stock: '',
    altura: '',
    ancho: '',
    largo: '',
    imagen: '',
    total: '',
    estatus: '',
    // Otros campos
  });

  const getData = () => {
    setFormData({
      id: data.id,
      nombre: data.nombre,
      descripcion: data.descripcion,
      stock: data.stock,
      altura: data.altura,
      ancho: data.ancho,
      largo: data.largo,
      imagen: data.imagen,
      total: data.total,
      estatus: data.estatus,
    })
  }

  useEffect(() => {
    getData()
  }, [data])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //imagen manejo
  const [base64Image, setBase64Image] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        setBase64Image(base64String);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal open={open} onClose={onClose} style={{overflow: "scroll"}}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <h2 style={{marginTop: "10rem"}}>Editar Producto</h2>
        <form>
          {/* Define aquí los campos de tu formulario */}
          <TextField name="id" label="Id" value={formData.id || ""} variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField name="nombre" label="Nombre" value={formData.nombre|| ""} variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="descripcion" label="Descripcion" value={formData.descripcion|| ""} variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="stock" label="Stock" value={formData.stock|| ""} variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="altura" label="Altura" value={formData.altura|| ""} variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="ancho" label="Ancho" value={formData.ancho|| ""} variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="largo" label="Largo" value={formData.largo|| ""} variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="total" label="Total" value={formData.total|| ""} variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <Input type="file"
          inputProps={{ accept: 'image/*' }} name="imagen" label="Imagen" fullWidth sx={{ mb: 2 }} onChange={handleFileChange} />
          
          {/** 
          
          <TextField name="descripcion" label="Descripcion" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="stock" label="Stock" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="altura" label="Altura" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="ancho" label="Ancho" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="largo" label="Largo" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <TextField name="total" label="Total" variant="outlined" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
          <Input type="file"
          inputProps={{ accept: 'image/*' }} name="imagen" label="Imagen" fullWidth sx={{ mb: 2 }} onChange={handleFileChange} />*/}
          {
            formData.imagen && (
              <>
              <h6>Imagen actual</h6> 
              <img src={formData.imagen} alt="imagen" width="auto" height="150px" style={{marginBottom: '10px'}}/>
              </>
            )
          }
           {
            base64Image && (
              <>
              <h6>Nueva imagen</h6>
              <img src={base64Image} alt="imagen" width="auto" height="150px" style={{marginBottom: '10px'}}/>
              </>
            )
           }
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Enviar
          </Button>
        </form>
      </Box>
    </Modal>
  );

}
