import { useEffect, useState } from "react"

const Post = () => {
    const [post, setPost] = useState([])
    const [quote, setQuote] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const postPerPage = 20

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts")
                const data = await res.json()
                console.log(data)

                const preparedPost = data.map(post => ({
                    id: post.id,
                    title: post.title,
                    body: post.body,
                    userId: post.userId,
                }))

                setPost(preparedPost)
            } catch (err) {
                console.log(err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        const fetchQuotes = async () => {
            setLoading(true)
            try {
                const res = await fetch("https://dummyjson.com/quotes/random")
                const data = await res.json()
                // setQuotes(data)

                setQuote({
                    id: data.id,
                    quote: data.quote,
                    author: data.author,
                })
                console.log(data)
                // setQuote(quote)
            } catch (err) {
                console.log(err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPost()
        fetchQuotes()
    }, [])

    // ✅ Pagination logic
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const currentPost = post.slice(
        indexOfFirstPost,
        indexOfLastPost
    )

    const totalPages = Math.ceil(post.length / postPerPage)

    return (
        <div className="flex flex-col gap-4 w-full bg-[var(--color-primary)]/50 max-w-7xl mx-auto mt-10 rounded-xl p-6 shadow justify-between items-center h-[80vh] overflow-y-hidden">
            <div className="p-4 bg-gray-200 rounded shadow flex flex-col gap-0.5 items-center justify-between ">
                {quote && (
                    <>
                        <p className="italic">"{quote.quote}"</p>
                        <p className="text-sm  self-end font-semibold mt-2">
                            — {quote.author}
                        </p>
                    </>
                )}
            </div>

            <h1 className="text-3xl text-black">Post from famous authors</h1>

            {error && (
                <div className="text-md bg-red-100 rounded-md w-full text-center p-2 text-red-600">
                    Error: {error}
                </div>
            )}

            {loading && (
                <div className="text-md bg-gray-100 rounded-md w-full text-center p-">
                    Loading...
                </div>
            )}

            {!loading && currentPost.length > 0 && (
                <ul className="list-none gap-6 overflow-y-scroll no-scrollbar grid grid-cols-4  shadow-lg p-4">
                    {currentPost.map(post => (
                        <li key={post.id} className="p-2 border bg-gray-200 shadow-lg hover:bg-gray-300 rounded flex flex-col gap-2">
                            <h2 className="font-bold">{post.title}</h2>
                            <p>{post.body}</p>
                            <p className="text-xs self-end">User ID: {post.userId}</p>
                        </li>
                    ))}
                </ul>
            )}

            {/* Pagination buttons */}
            <div className="flex justify-center gap-1 flex-wrap">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => p - 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-black text-white' : ''
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => p + 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Post
