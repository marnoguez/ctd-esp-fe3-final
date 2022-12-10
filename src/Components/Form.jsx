import React, { useContext } from "react";
import { TextField, Grid, Button } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"
import { ContextGlobal } from './utils/global.context'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const { state, dispatch} = useContext(ContextGlobal)

  const {/*handleChange,*/ handleSubmit, values, setFieldValue, errors} = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: ""
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Debes ingresar un nombre").min(5),
      apellido: Yup.string().required("Debes ingresar un apellido").min(5),
      email: Yup.string().required("Debes ingresar un mail"),
    }),
    onSubmit: (data) =>{
      console.log(data);
      document.querySelector('.submit').innerHTML=`<h3> Gracias, ${data.nombre} nos contactaremos cuanto antes via email </h3>`
    }
  })


  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", alignItems:"center", flexWrap:"wrap", filter: state.bgFlag === "DARK" ? "invert(100%)" : null}}>
        <Grid 
          container
          alignItems="center" 
          justifyContent="space-evenly"
          spacing={2}
          sx={{width:"100%", }}
          >
          <Grid item xs={12} sm={10} md={7}>
            <TextField
            color="" 
            
            type="text" 
            label="Ingrese su nombre" 
            variant="outlined" 
            fullWidth
            // name="nombre"
            onChange={(e)=>{
              setFieldValue("nombre", e.target.value)
            }}
            value={values.nombre}
            error={errors.nombre}
            helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={7}>
            <TextField 
            type="text" 
            label="Ingrese su apellido" 
            variant="outlined" 
            fullWidth
            // name="apellido"
            onChange={(e)=>{
              setFieldValue("apellido", e.target.value)
            }}
            value={values.apellido}
            error={errors.apellido}
            helperText={errors.apellido}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={7} >
            <TextField 
            type="email" 
            label="Ingrese su email" 
            variant="outlined" 
            fullWidth
            // name="email"
            onChange={(e)=>{
              setFieldValue("email", e.target.value)
            }}
            value={values.email}
            error={errors.email}
            helperText={errors.email}
            />
          </Grid>
        </Grid>
        <Button color="error" type="submit" variant="contained" style={{width:"200px", margin:"40px"}}>Enviar</Button>
      </form>
      <div className= 'submit'>

      </div>
    </div>
  );
};

export default Form;
