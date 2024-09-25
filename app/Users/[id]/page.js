export const metadata={
    title : "List Users"
}

const ProfilUser=async({params})=>{
    console.log(params.id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    return(
        <div>
            <h2>Profil User</h2>
            <h3>{user.name}</h3>
        </div>
    )
}

export default ProfilUser