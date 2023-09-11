import dynamic from 'next/dynamic'
import React from 'react'
import { useState, useRef, useMemo, useCallback } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents  } from 'react-leaflet';


const center = {
    lat: 36.86,
    lng: 10.18,
  }

{/*function DraggableMarker(props) {
    const [draggable, setDraggable] = useState(true)
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          

          if (marker != null) {
            setPosition(marker.getLatLng());
                 
            props.onChange && props.onChange(marker.getLatLng());
           

            


          }
        },
      }),
      [],
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])
  
    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'Marker is draggable'
              : 'Click here to make marker draggable'}
          </span>
        </Popup>
      </Marker>
    )
  }*/}



function LocationMarker(props) {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      console.log("position",position)
      map.flyTo(e.latlng, map.getZoom())
props.onChange && props.onChange(e.latlng);
      console.log("e",e.latlng)
    },
    
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here 
      {JSON.stringify(position)}</Popup>
    </Marker>
  )
}
const NonSSRWrapper = (props) => { 
        
  return (
    <React.Fragment>{props.children}
    
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                 <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="http://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                    />
                {/* <DraggableMarker onChange={props.onChange} /> */}
                <LocationMarker onChange={props.onChange}/>
                  </MapContainer>
    </React.Fragment> );

  } 
export default dynamic(() => Promise.resolve(NonSSRWrapper), { 
    ssr: false 
})