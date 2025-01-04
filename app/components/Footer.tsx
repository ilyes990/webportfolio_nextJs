export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-4">
      <p className="text-center text-sm">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </p>
    </footer>
  )
}

