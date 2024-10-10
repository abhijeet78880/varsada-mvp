export default function Navbar() {
  return (
    <nav className="px-8 py-4 flex justify-between">
      <div className="">logo</div>
      <ul className="flex gap-6 font-bold capitalize subtitle2">
        <li>new in</li>
        <li>best seller</li>
        <li>category</li>
      </ul>
      <ul className="flex gap-6 capitalize caption">
        <li>search</li>
        <li>varsada bag</li>
        <li>dreamlist</li>
        <li>profile</li>
      </ul>
    </nav>
  )
}