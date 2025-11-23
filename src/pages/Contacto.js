import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik'; 
import * as Yup from 'yup'; 
import Swal from 'sweetalert2'; // Importamos la librería de alertas

function Contacto() {
  // Configuración de Formik y Yup
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      mensaje: ''
    },
    // Esquema de validación
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, 'El nombre debe tener al menos 3 caracteres')
        .required('Campo obligatorio'),
      email: Yup.string()
        .email('Email inválido')
        .required('Campo obligatorio'),
      mensaje: Yup.string()
        .min(10, 'El mensaje es muy corto')
        .required('Campo obligatorio')
    }),
    // AQUÍ ESTÁ LA CORRECCIÓN: El onSubmit va DENTRO del objeto de configuración
    onSubmit: (values, { resetForm }) => {
        // Alerta bonita con SweetAlert2
        Swal.fire({
            title: '¡Mensaje Enviado!',
            text: 'Te responderemos a la brevedad.',
            icon: 'success',
            confirmButtonColor: '#198754', // Verde
            confirmButtonText: 'Aceptar'
        });
        
        // Limpiamos el formulario
        resetForm();
    },
  });

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4">Contacto</h2>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
            <div className="p-4 border rounded shadow-sm bg-light">
                <Form onSubmit={formik.handleSubmit}>
                    {/* Campo Nombre */}
                    <Form.Group className="mb-3">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nombre}
                        isInvalid={formik.touched.nombre && formik.errors.nombre}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.nombre}
                    </Form.Control.Feedback>
                    </Form.Group>

                    {/* Campo Email */}
                    <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        isInvalid={formik.touched.email && formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                    </Form.Control.Feedback>
                    </Form.Group>

                    {/* Campo Mensaje */}
                    <Form.Group className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="mensaje"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mensaje}
                        isInvalid={formik.touched.mensaje && formik.errors.mensaje}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.mensaje}
                    </Form.Control.Feedback>
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="success" type="submit" size="lg">
                            Enviar Mensaje
                        </Button>
                    </div>
                </Form>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;