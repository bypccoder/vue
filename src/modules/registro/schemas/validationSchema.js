import * as yup from 'yup';

export const schema = yup.object({
    nombre: yup.string().required('El nombre es obligatorio').min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: yup.string().email('Correo electrónico inválido').required('El correo electrónico es obligatorio')
});

