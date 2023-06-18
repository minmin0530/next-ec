export default function Any({ params }: { params: { slug: string[] }}) {
    console.log(params);
    return (
        <>
            <h1>{params.slug[0]}</h1>
            <h1>{params.slug[1]}</h1>
            <h1>{params.slug[2]}</h1>
        </>
    )
}