import { toast } from "sonner";

function Classes() {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() =>
          // toast("This is a sonner toast", {
          //   closeButton: true,
          // })
          toast.success("This is a sonner toast")
        }
      >
        Primary
      </button>
    </div>
  );
}

export default Classes;
