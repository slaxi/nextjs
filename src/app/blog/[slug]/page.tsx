import { useRouter } from "next/navigation";
import style from "./singleblog.module.css";
import Image from "next/image";
import UserPage from "@/components/user/User";
import { env } from "process";
import { Suspense } from "react";

interface ISingleBlog {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const getSingleBlog = async (id: number): Promise<ISingleBlog> =>
  await fetch(`${env.BASE_URL_PHOTOS}/${id} `, {cache: 'no-store'})
    .then((response) => {
      if (!response.ok) {
        throw Error("Something went wrong!");
      }
      return response.json();
    })
    .catch((error) => {
      return error;
    });

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const { slug: id } = params;
  const singleBlog: ISingleBlog = await getSingleBlog(parseInt(id));
  return (
    <div className={style.blogContainer}>
      <div className={style.imageContainer}>
        <Image
          src={singleBlog.url}
          alt="Blog image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={style.infoContainer}>
      <Suspense fallback={<div> Loading...</div>}>
        <p className={style.author}>
          Author:{" "}
          
            {" "}
            <UserPage id={parseInt(id)} />
        </p>
          </Suspense>
        <p className={style.date}>Date: January 1, 2022</p>
        <h1 className={style.title}>Blog Title</h1>
        <p className={style.description}>
          This is a description of the blog. This is a placeholder description.
        </p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
