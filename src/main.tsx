import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Error } from './routes/Error'
import { Home } from './routes/Home'
import { Produtos } from './routes/Produtos'
import { Sobre } from './routes/Sobre'
import { Login } from './routes/Login'
import { CadastrarProduto } from './routes/CadastrarProduto'

import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/produtos', element: <Produtos /> },
            { path: '/sobre', element: <Sobre /> },
            { path: '/login', element: <Login /> },
            { path: '/cadastrar-produto', element: <CadastrarProduto /> },
        ],
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
