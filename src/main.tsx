import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Error } from './routes/Error.jsx'
import { Home } from './routes/Home.jsx'
import { Produtos } from './routes/Produtos.jsx'
import { Sobre } from './routes/Sobre.jsx'
import { Login } from './routes/Login.jsx'
import { CadastrarProduto } from './routes/CadastrarProduto.jsx'

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

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
