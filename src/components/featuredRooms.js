import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './loading';
import Room from './room'
import Title from './title'
export default class featuredRooms extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })
        return (
            <section className='featured-rooms' id='anchor'>
                <Title title="Chambres en vedette" />
                <div className='featured-rooms-center'>
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}
