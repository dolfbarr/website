import { LOCATION } from '@utils/data'
import { type ReactElement } from 'react'
import type React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import '@styles/map.scss'

// const DEFAULT_ZOOM = 4

const Map: React.FC<
  React.HTMLAttributes<HTMLButtonElement>
> = (): ReactElement => {
  const Placeholder = (): ReactElement => (
    <p className="flex content-center justify-center">
      Map of {LOCATION.title}.{' '}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  )

  return (
    <div className="mb-8 max-h-96">
      {typeof window !== 'undefined' ? (
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          className="max-h-96">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <Placeholder />
      )}
    </div>
  )
}

export default Map
