import CampoFormulario from "../CampoFormulario/CampoFormulario";
import CampoFormularioCheckbox from "../CampoFormularioCheckbox/CampoFormularioCheckbox";
import Botao from "../Botao/Botao";
import { CPFValido } from "../ValidaCPF/ValidaCPF";
import {mensagemError, mensagemSucesso} from "../Mensagem/Mensagem";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditarClientes() {

    const opcoesInteresses = [
        {value: "Artes", nome: "Artes"},
        {value: "Esportes", nome: "Esportes"},
        {value: "Dança", nome: "Dança"},
        {value: "Ficção", nome: "Ficção"},
    ];

    const {id} = useParams();
    const navigate = useNavigate();

    const schemaDeValidacao = yup.object({
        nome: yup.string().required("Campo obrigatório").min(3, "Mínimo 3 caracteres"),
        telefone: yup.string().nullable().required("Campo obrigatório").min(11, "Telefone inválido").max(15, "Telefone inválido").matches(/\(?[0-9]{2}\)?[\s][0-9]{5}-?[0-9]{4}/, "Formato inválido"),
        email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
        cpf: yup.string().nullable().required("Campo obrigatório").min(11, "CPF inválido")
        .max(14, "CPF inválido")
        .test('validacaoCPF', 'CPF inválido', CPFValido),
        interesses: yup.array().required('Selecione pelo menos uma opção').min(1, 'Selecione pelo menos uma opção').transform((value) => (Array.isArray(value) ? value : [])),
    })

    const {handleSubmit, register, formState: { errors }, reset} = useForm({
        resolver: yupResolver(schemaDeValidacao)
    })

    const [cpfValor, setCPFValor] = useState("");
    const [telefoneValor, setTelefoneValor] = useState("");

    const carregarRegistro = async () => {
        try {
            const response = await axios.get(`https://contratos.smedtecnologia.com.br/contratos-service/estag-clientes/${id}`);
            const registro = response.data;
            const { cpf, telefone } = registro;

            reset(registro);
    
            setCPFValor(cpf || "");
            setTelefoneValor(telefone || "");

        } catch (error) {

            if(error.response.status === 404 || error.response.status === 400){
                navigate("*")
            }

            mensagemError(error);
        }
    };

    useEffect(() =>  {   
        carregarRegistro()
    }, [id, reset, navigate]);
      
    const editarCadastro = async (variaveis) => {

        const dados = { 
            "id": id,
            "nome": variaveis.nome, 
            "cpf": variaveis.cpf, 
            "email": variaveis.email, 
            "telefone": variaveis.telefone}

        console.log(dados);
        
        try {
            await axios.post(`https://contratos.smedtecnologia.com.br/contratos-service/estag-clientes`, dados);
            mensagemSucesso();

            reset({
                nome: '',
                telefone:'',
                email: '',
                cpf: '',
                interesses: [],
            });

            setCPFValor('');
            setTelefoneValor('');
            
        } catch(error) {

            console.log(error);

            mensagemError(error);

        }

    }

    const save = (data) => {
        editarCadastro(data)
    }

    return(
        <form className="m-5" data-formulario onSubmit={handleSubmit(save)} >
            <CampoFormulario 
                tituloCampo="Nome:"
                erro = {errors?.nome && <p className="padrao-msg-error">{errors?.nome?.message}</p>  }
                type="text"
                className={errors.nome ? "padrao-input-error" : ""}
                register={register("nome")}
                require={true}
            />      

            <CampoFormulario 
                tituloCampo="Telefone:"
                erro = {errors?.telefone && <p className="padrao-msg-error">{errors?.telefone?.message}</p>  }
                type="tel"
                className={errors.telefone ? "padrao-input-error" : ""}
                register={register("telefone")}
                mascara = {"(99) 99999-9999"}
                require={true}
                value={telefoneValor}
                onChange={(e) => setTelefoneValor(e.target.value)}
            />     

            <CampoFormulario 
                tituloCampo="CPF:"
                erro = {errors?.cpf && <p className="padrao-msg-error">{errors?.cpf?.message}</p>  }
                type="text"
                className={errors.cpf ? "padrao-input-error" : ""}
                register={register("cpf")}
                mascara = {"999.999.999-99"}
                require={true}
                value={cpfValor}
                onChange={(e) => setCPFValor(e.target.value)}
            /> 

            <CampoFormulario 
                tituloCampo="Email:"
                erro = {errors?.email && <p className="padrao-msg-error">{errors?.email?.message}</p>  }
                type="email"
                className={errors.email ? "padrao-input-error" : ""}
                register={register("email")}
                require={true}
            /> 

            <div className="px-6 flex flex-col ">
                <div className="pl-10">
                    <label>Interesse(s): <span className="pl-1 text-red-600">*</span> </label>
                    {errors?.interesses && <p className="mb-1 padrao-msg-error">{errors?.interesses?.message}</p>}
                </div>
                <div className="flex justify-center">
                    {opcoesInteresses.map(opcao => (
                        <CampoFormularioCheckbox 
                            key={opcao.value}
                            nomeCampo={opcao.nome}
                            className={errors.interesses ? "appearance-none rounded border-2 padrao-input-error" : ""}
                            value={opcao.value}
                            register={register("interesses")}
                        />
                    ))}   
                </div> 
            </div>   
                
            <Botao
                type="submit"
                texto="Salvar"            
            />
        </form>                      
    )
}