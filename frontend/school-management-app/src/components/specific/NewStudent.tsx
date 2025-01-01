import { Select } from "@headlessui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type NewStudentProps = {
  record : any;
  onClose: () => void;
  onRefresh? : () => void;
}
function NewStudent({record , onClose , onRefresh} : NewStudentProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    alert("submitted");
    onClose();
    onRefresh?.();
  };

  useEffect(() => {
    if (record && record !== null) {
      reset(record);
    }
  },[record])

  return (
    <div className="bg-transparent px-1" >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >
        <div className="w-full grid grid-cols-3 space-x-4">
          <div className="flex flex-col">
            <label className="label mb-2" htmlFor="example">
              Nom
            </label>
            <input
              defaultValue="test"
              {...register("name")}
              className="input"
            />
          </div>
          <div className="flex flex-col">
            <label className="label mb-2" htmlFor="example">
              Type
            </label>
            <input
              defaultValue="test"
              {...register("type")}
              className="input"
            />
          </div>
          <div className="flex flex-col">
            <label className="label mb-2" htmlFor="exampleRequired">
              Task
            </label>
            <input
              {...register("exampleRequired", { required: true })}
              className={errors.exampleRequired ? "input-error" : "input"}
            />
            {errors.exampleRequired && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="w-full grid grid-cols-3 space-x-4">
          <div className="flex flex-col">
            <label className="label mb-2" htmlFor="example">
              Example
            </label>
            <input
              defaultValue="test"
              {...register("example")}
              className="input"
            />
          </div>
          <div className="flex flex-col">
            <label className="label mb-2" htmlFor="example">
              Example
            </label>
            <input
              defaultValue="test"
              {...register("example")}
              className="input"
            />
          </div>
          <div className="flex flex-col">
            <label className="label mb-2" htmlFor="exampleRequired">
              Example required
            </label>
            <input
              {...register("exampleRequired", { required: true })}
              className={errors.exampleRequired ? "input-error" : "input"}
            />
            {errors.exampleRequired && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <Select
          name="status"
          className="border data-[hover]:shadow data-[focus]:bg-blue-100"
          aria-label="Project status"
        >
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>

        <div className="flex w-full justify-center items-center space-x-4 mt-4">
          <button className="btn btn-ghost" type="reset">
            Réinitialiser
          </button>
          <button className="btn btn-primary" type="submit">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewStudent;
