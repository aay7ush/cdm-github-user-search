import { Building2, Link, Mail, MapPin, Twitter } from 'lucide-react'
import { useEffect, useState } from 'react'

const UserProfile = ({ user }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`)
        if (response.ok) {
          const userData = await response.json()
          setData(userData)
        } else {
          setData(null)
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
        setData(null)
      }
    }

    if (user) {
      fetchUserData()
    }
  }, [user])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
    return new Intl.DateTimeFormat('en-US', options).format(date)
  }

  return (
    <section className="rounded-md bg-gray-800 p-5 text-center grid justify-items-center space-y-2">
      {data ? (
        <>
          <img
            src={data.avatar_url}
            alt="user avatar"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h2 className="text-2xl font-medium">{data.name || data.login}</h2>
          <p className="text-sm text-gray-300">
            Joined {formatDate(data.created_at)}
          </p>
          {data.bio && <p className="max-w-xs">{data.bio}</p>}
          <div className="w-full p-4 flex justify-between bg-gray-950 bg-opacity-50 rounded-md">
            <div className="repos">
              <p className="text-gray-300 font-medium">Repos</p>
              <p className="font-bold text-2xl">{data.public_repos}</p>
            </div>
            <div className="followers">
              <p className="text-gray-300 font-medium">Followers</p>
              <p className="font-bold text-2xl">{data.followers}</p>
            </div>
            <div className="followings">
              <p className="text-gray-300 font-medium">Following</p>
              <p className="font-bold text-2xl">{data.following}</p>
            </div>
          </div>
          <div className="space-y-2">
            {data.location && (
              <div className="location">
                <MapPin />
                <p>{data.location}</p>
              </div>
            )}
            {data.company && (
              <div className="company">
                <Building2 />
                <p>{data.company}</p>
              </div>
            )}
            {data.email && (
              <div className="email">
                <Mail />
                <p>{data.email}</p>
              </div>
            )}
            {data.blog && (
              <div className="website">
                <Link />
                <a
                  href={data.blog}
                  className="text-yellow-400 hover:underline underline-offset-4"
                >
                  {data.blog}
                </a>
              </div>
            )}
            {data.twitter_username && (
              <div className="twitter">
                <Twitter />
                <a
                  href={`https://twitter.com/${data.twitter_username}`}
                  className="text-yellow-400 hover:underline underline-offset-2"
                >
                  {`https://twitter.com/${data.twitter_username}`}
                </a>
              </div>
            )}
          </div>
        </>
      ) : (
        <h2 className="text-3xl font-bold">User Not Found</h2>
      )}
    </section>
  )
}

export default UserProfile
