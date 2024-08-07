import Category from "../Category/Category.component";
import "./Directory.styles.scss";

const Directory = ({ categories }) => {
    return (
        <div className='directory-container'>
            {categories.map( category => (
                <Category key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Directory;