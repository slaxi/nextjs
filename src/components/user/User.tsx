import { env } from "process"

interface IUser {
    name:  string
}

const getUserData = async (id: number): Promise<IUser> => {
    return await fetch(`${env.BASE_URL_USER}/${id}`, {cache: 'no-store'}).then((response) => {
        if(!response.ok) throw new Error('Could not find user');
        return response;
    }).then((response) => {return response.json()}).catch((err) => {console.error(err)})
}

const UserPage = async ({id}: {id: number}) => {
    const user = await getUserData(id)
    console.log(user)
    

  return (
    <span>{user.name}</span>
  )
}

export default UserPage