import InputMask from 'react-input-mask';

export default function CampoFormulario({ tituloCampo, erro, type, className, register, mascara, value, onChange, require }) {
    return (
        <div className="mb-2 px-6 flex items-center">
                <label className=" w-1/4 pl-10 ">{tituloCampo}{require ? <span className="pl-1 text-red-600">*</span> : "" } </label>
                <div className="pr-10 w-3/4">
                    { mascara ?
                        <InputMask
                            type={type}
                            className={`padrao-input-form ${className}`}
                            {...register}
                            autoComplete="off"
                            mask={mascara}
                            value={value}
                            onChange={onChange}
                        /> :
                        <input
                            type={type}
                            className={`padrao-input-form ${className}`}
                            {...register}
                            autoComplete="off"
                            value={value}
                            onChange={onChange}
                        />
                    }
                    {erro}
                </div>
        </div>
    );
}
  
  