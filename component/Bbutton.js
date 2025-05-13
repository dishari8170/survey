import "@/styles/btx.css"

const Bbutton = ({ label, target }) => {

    return (
        <div className="btn  beautihover" onClick={() =>{target()}}>
            {label}
        </div>
    );
};

export default Bbutton;