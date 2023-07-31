export default function CampoFormularioCheckbox ({ nomeCampo, className, value, register }) {
  return (
    <div className="inline-flex items-center space-x-1">
        <input
            className={`cursor-pointer checked:opacity-100 h-4 w-4 ${className ? className : 'opacity-40'}`}
            type="checkbox"
            value={value}
            {...register}
        />
        <label className=" pr-4" >{nomeCampo}</label>
    </div>
  );
};

