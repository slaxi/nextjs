import Image from "next/image"
import style from './blog.module.css'
import NavigationPage from "@/components/NavigationPage";

interface Blog {
  id: number;
  title: string;
  url: string;
  albumId: number;
}[]
const getImages = async (): Promise<Blog[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos',  {cache: 'no-store'})
  if(!response.ok) {
    throw Error('Something went wrong...')
  }
  const imagesList = await response.json()
  return imagesList.slice(0, 10)
  
}

const BlogPage = async () => {


  const imagesList = await getImages()

    return (
      <div className={style.container}>
        {imagesList.map(({id, title, url, albumId}) => {
          return (
            <div className={style.card} key={id}>
            <Image src={url} alt="Slika 1" width={150} height={150} />
            <div className={style.content}>
              <h2>{title}</h2>
              <p>{albumId} lorem ipsum something else..</p>
              <button className={style.button} >
                <NavigationPage id={id}/>
              </button>
            </div>
          </div>
            )
        })}
     
      </div>

    )
    
  }
  
  export default BlogPage



