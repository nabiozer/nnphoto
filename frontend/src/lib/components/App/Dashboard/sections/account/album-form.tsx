import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Box, Pvc, Wood } from '../customer/type';
import { IUser } from '../../../../../../types/user';



const styles = StyleSheet.create({
    pageBackground: {
        position: 'absolute',
        minWidth: '100%',
        minHeight: '100%',

        height: '100%',
        width: '100%',
        zIndex: '-1',
    },

    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },

    firmName: {
        position: 'absolute',
        top: '135px',
        left: '135px',
        color: 'red'
    },
    albumName: {
        position: 'absolute',
        top: '200px',
        left: '140px',
        color: 'red'
    },
    materialName: {
        position: 'absolute',
        top: '200px',
        left: '390px',
        color: 'red'
    },
    setName: {
        position: 'absolute',
        top: '265px',
        left: '145px',
        color: 'red'
    },
    coverText: {
        position: 'absolute',
        top: '325px',
        left: '215px',
        color: 'red'
    },
    poster: {
        position: 'absolute',
        top: '383px',
        left: '135px',
        color: 'red'
    },
    canvas: {
        position: 'absolute',
        top: '383px',
        left: '375px',
        color: 'red'
    },
    pvcBoxBlack: {
        position: 'absolute',
        top: '133px',
        right: '54px',
        width: '28px',
        height: '24px',
        backgroundColor: 'black',
    },
    pvcBoxWhite: {
        position: 'absolute',
        top: '100px',
        right: '54px',
        width: '28px',
        height: '24px',
        backgroundColor: 'black',
    },
    walnutWood: {
        position: 'absolute',
        top: '240px',
        right: '54px',
        width: '28px',
        height: '24px',
        backgroundColor: 'black',
    },
    blackWood: {
        position: 'absolute',
        top: '273px',
        right: '54px',
        width: '28px',
        height: '24px',
        backgroundColor: 'black',
    },
    modalBox: {
        position: 'absolute',
        top: '438px',
        left: '155px',
        width: '28px',
        height: '24px',
        backgroundColor: 'black',
    },
    woodBox: {
        position: 'absolute',
        top: '438px',
        left: '340px',
        width: '28px',
        height: '24px',
        backgroundColor: 'black',
    },
    name: {
        position: 'absolute',
        top: '620px',
        left: '155px',
        color: 'red'
    },
    tel: {
        position: 'absolute',
        top: '620px',
        left: '390px',
        color: 'red'

    },
    address: {
        position: 'absolute',
        top: '690px',
        left: '155px',
        width: '340px',
        color: 'red'

    },

});
interface IProps  {
    customer:IUser
}
const AlbumForm = ({customer}:IProps) => {
   
    const {chosen,reservationInfo,address,phoneNumber,name} = customer;
    return (
        <Document>
            <Page  >
                <View style={styles.section}>
                    <Image src="/assets/album/form.jpg" style={styles.pageBackground} />
                    <Text style={reservationInfo?.album?.pvc === Pvc.White ? styles.pvcBoxWhite : styles.pvcBoxBlack}></Text>
                    {reservationInfo?.album?.wood !== '' && <Text style={reservationInfo?.album?.wood === Wood.Black ? styles.blackWood : styles.walnutWood}></Text>}
                    {reservationInfo?.album?.box !== '' && <Text style={reservationInfo?.album?.box === Box.Modal ? styles.modalBox : styles.woodBox}></Text>}
                    <Text style={styles.firmName}>NNPHOTOFILM</Text>
                    <Text style={styles.albumName}>{chosen?.album?.albumName}</Text>
                    <Text style={styles.materialName}>{chosen?.album?.colorCode}</Text>
                    <Text style={styles.setName}>{reservationInfo?.album?.albumDetail} - {reservationInfo?.album?.familyDetail && '2 Jumbo Cep'}</Text>
                    <Text style={styles.coverText}>{chosen?.coverText}</Text>
                    {reservationInfo?.album?.posterDetail && <Text style={styles.poster}>{reservationInfo?.album?.posterDetail}</Text>}
                    {reservationInfo?.album?.canvasDetail && <Text style={styles.canvas}>{reservationInfo?.album?.canvasDetail}</Text>}
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.tel}>{phoneNumber}</Text>
                    <Text style={styles.address}>{address}</Text>
                </View>
            </Page>

        </Document>
    )
}

export default AlbumForm