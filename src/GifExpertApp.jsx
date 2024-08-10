import { useState } from "react"
import { AddCategory, GifGrid} from "./components/index"


const GifExpertApp = () => {


const [categories, setCategories] = useState([ 'One Punch' ])

const onAddCategory = (newCategory) => {

if( categories.includes (newCategory)) return;

   //categories.push(newCategory)
   //setCategories([ 'Valorant', ...categories])
   setCategories([ newCategory, ...categories])

}

  return (
    <>
      <h1>GifExpertApp</h1>


      <AddCategory 
        //setCategories ={ setCategories }
        onNewCategory={onAddCategory}
      />

      { 
        categories.map( (category) => ( <GifGrid key={ category } category={category}/> ))
      }
      


    </>
  )
}

export default GifExpertApp

// App Key : nzd08uDNnA7JzRII0U35S0Ys7XhsMwY1