import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPostListings } from "~/models/post.server";
import { useOptionalAdminUser } from "~/utils";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostListings>>;
};

export const loader: LoaderFunction = async () => {
  const posts = await getPostListings();
  return json<LoaderData>({ posts });
};

export default function Posts() {
  const { posts } = useLoaderData() as LoaderData;
  const adminUser = useOptionalAdminUser();
  return (
    <main>
      <h1 className="font-mono text-4xl">Posts</h1>
      {adminUser ? (
        <Link
          to="admin"
          className="font-mono text-xl text-rose-900 no-underline"
        >
          Admin
        </Link>
      ) : null}
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              prefetch="intent"
              className="font-mono text-2xl text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
