import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { format } from 'date-fns';
import { IUser } from '../../../../../../types/user';
import { getDate } from '../../../../../_helpers';
import { Packages } from './type';


type Props = { userDetails: IUser }
Font.register({
    family: "Roboto",
    fonts: [
        { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf", fontWeight: 300 },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf", fontWeight: 400 },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf", fontWeight: 500 },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf", fontWeight: 600 },
    ],
},
)

const styles = StyleSheet.create({
    pageBackground: {
        position: 'absolute',
        minWidth: '100%',
        minHeight: '100%',

        height: '100%',
        width: '100%',
        zIndex: '-1',
    },
    header: {
        margin: 10,
        width: '100%',
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 600,
        fontFamily: 'Roboto'

    },
    headerText: {
        fontSize: 21,
        fontFamily: 'Courier-Bold',
        letterSpacing: '4px',
    },
    textAlignCenter: {
        textAlign: 'center'
    },

    section: {
        padding: 20,
        fontFamily: "Roboto",
        fontWeight: 'bold',

    },
    borderTop: {
        borderTop: 1,
        borderRight: 1,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',

        borderBottom: 1,
        borderLeft: 1,
        borderRight: 1,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    flexRow2: {
        display: 'flex',
        flexDirection: 'row',
    },
    Col1: {
        width: '32%',
        height: '100%',
        fontSize: 10,
        fontWeight: 'bold',
        borderRight: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        padding: 4,

    },
    Col2: {
        width: '68%',
        height: '100%',
        fontSize: 10,
        padding: 4,
        textAlign: 'center',
        marginLeft: 1,
        fontWeight: 300,
    },
    ColDetail1: {
        width: '32%',
        height: '100%',
        fontSize: 10,
        fontWeight: 'bold',
        borderRight: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        padding: 4,
        textAlign: 'center',
    },
    ColDetail2: {
        width: '18%',
        height: '100%',
        fontSize: 10,
        fontWeight: 300,

        padding: 4,
        textAlign: 'center',
    },
    ColProduct1: {
        width: '58%',
        height: '100%',
        fontSize: 10,
        fontWeight: 'bold',
        borderRight: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        padding: 4,
        textAlign: 'center',
    },
    ColProduct2: {
        width: '50%',
        height: '100%',
        fontSize: 10,
        fontWeight: 300,

        padding: 4,
        textAlign: 'center',
    },
    marginHeader: {
        margin: 4
    },
    colorRed: {
        color: 'red'
    },
    ColCont1: {
        width: '15%',
        height: '100%',
        fontSize: 6,
        fontWeight: 'bold',
        borderRight: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        padding: 4,
        textAlign: 'center',
    },
    ColCont2: {
        width: '85%',
        height: '100%',
        fontSize: 6,

        padding: 4,
        textAlign: 'center',
    },
    contSeperator: {
        marginTop: 1
    },
    borderRight: {
        borderRight: 1,
        borderStyle: 'solid',
        borderColor: 'black',
    },


    ColFooter: {
        width: '25%',
        height: '100%',
        fontSize: 6,
        padding: 4,
        textAlign: 'center',
        fontFamily: "Roboto",
        fontWeight: 'bold',
    },
    signBox: {
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    colPayment: {
        width: '33.34%',
        height: '100%',
        fontSize: 10,
        fontWeight: 'bold',
        borderRight: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        padding: 4,
        textAlign: 'center',
    }








});
const ContractPdf = (props: Props) => {
    const { userDetails } = props
    return (
        <Document>
            <Page style={styles.section}>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>NNPHOTOFILM</Text>
                    </View>
                    <View>
                        <View style={[styles.flexRow, styles.borderTop]}>
                            <Text style={styles.Col1}>Ad Soyad</Text>
                            <Text style={styles.Col2}>{userDetails?.name}</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text style={styles.Col1}>Sözleşme Tarihi</Text>
                            <Text style={styles.Col2}>{format(new Date(), 'dd-MM-yyyy')}</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text style={styles.Col1}>İletişim</Text>
                            <Text style={styles.Col2}>{userDetails?.phoneNumber}</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text style={styles.Col1}>Adres</Text>
                            <Text style={styles.Col2}>{userDetails?.address}</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text style={styles.Col1}>E-Mail</Text>
                            <Text style={styles.Col2}>{userDetails?.email}</Text>
                        </View>
                    </View>
                    <View style={styles.header}>
                        <Text >FOTOĞRAF ÇEKİMİNİN DETAYLARI</Text>
                    </View>
                    <View>
                        <View style={[styles.flexRow, styles.borderTop]}>
                            <Text style={styles.ColDetail1}>Çekim Tarihi</Text>
                            <Text style={[styles.ColDetail2, styles.borderRight]}>{getDate(userDetails?.reservationInfo?.date, 'Ppp') || '-'}</Text>
                            <Text style={styles.ColDetail1}>Çekim Mekanı</Text>
                            <Text style={styles.ColDetail2}>{userDetails?.reservationInfo?.place}</Text>

                        </View>
                        <View style={styles.flexRow}>
                            <Text style={styles.ColDetail1}>Paket Detayı</Text>
                            <Text style={[styles.ColDetail2, styles.borderRight]}> {userDetails?.reservationInfo?.packageDetails}</Text>
                            <Text style={styles.ColDetail1}>Ortalama Çekim Süresi</Text>
                            <Text style={styles.ColDetail2}>{userDetails?.reservationInfo?.packageDetails === Packages.three ? '1.5 Saat' : '1 Saat'}</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text style={styles.ColDetail1}>Düzenlenecek Fotoğraf Sayısı</Text>
                            <Text style={[styles.ColDetail2, styles.borderRight]}>30 Adet</Text>
                            <Text style={styles.ColDetail1}>Teslim Edilecek Fotoğraf Sayısı</Text>
                            <Text style={styles.ColDetail2}>Tamamı Dijital Teslim</Text>
                        </View>
                    </View>
                    <View style={styles.marginHeader}>
                    </View>
                    <View style={styles.header}>
                        <Text >PAKET DETAYLARI</Text>
                    </View>
                    <View>
                        <View style={[styles.flexRow, styles.borderTop]}>
                            <Text style={styles.ColProduct1}>PANAROMİK ALBÜM ÖLÇÜSÜ VE SAYISI</Text>
                            <Text style={styles.ColProduct2}>1Adet - {userDetails?.reservationInfo?.album?.albumDetail}</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text style={styles.ColProduct1}>AİLE ALBÜMÜ SAYISI</Text>
                            <Text style={styles.ColProduct2}>{userDetails?.reservationInfo?.album?.familyDetail}</Text>
                        </View>

                        <View style={styles.flexRow}>
                            <Text style={styles.ColProduct1}>POSTER ADET VE ÖLÇÜSÜ</Text>
                            <Text style={styles.ColProduct2}>{userDetails?.reservationInfo?.album?.posterDetail && userDetails?.reservationInfo?.album?.posterDetail} {userDetails?.reservationInfo?.album?.canvasDetail && userDetails?.reservationInfo?.album?.canvasDetail}</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text style={[styles.ColProduct1, styles.colorRed]}>EKSTRA ÜRÜNLER</Text>
                            <Text style={styles.ColProduct2}>{userDetails?.reservationInfo?.packageDetails === Packages.three ? 'DRONE(HAVA ŞARTLARI UYGUN İSE),VİDEO KLİP' : ''}{userDetails?.reservationInfo?.extras}</Text>
                        </View>
                    </View>
                    <View style={styles.marginHeader}>

                    </View>
                    <View>
                        <View style={[styles.flexRow, styles.borderTop]}>
                            <Text style={styles.colPayment}>Paket Tutarı</Text>
                            <Text style={styles.colPayment}>Ön Ödeme Tutarı</Text>
                            <Text style={styles.colPayment}>Kalan Ödeme</Text>

                        </View>
                        <View style={[styles.flexRow]}>
                            <Text style={styles.colPayment}>{userDetails?.reservationInfo?.packagePrice} TL</Text>
                            <Text style={styles.colPayment}>{userDetails?.reservationInfo?.advancePayment} TL</Text>
                            <Text style={styles.colPayment}>{userDetails?.reservationInfo?.packagePrice - userDetails?.reservationInfo?.advancePayment} TL</Text>

                        </View>
                    </View>
                    <View style={styles.marginHeader}>
                    </View>
                    <View>
                        <View style={[styles.flexRow, styles.borderTop]}>
                            <Text style={styles.ColCont1}>MADDE 1 - TARAFLAR</Text>
                            <Text style={styles.ColCont2}>TARAF 1 : RASİMPAŞA MAHALLESİ SÖĞÜTLÜÇEŞME CADDESİ NO:103 DAİRE:3 ADRESİNDE BULUNAN İPEKYOLU MODA İLE TARAF :{userDetails?.name} (MÜŞTERİ) YUKARIDA BELİRTİLEN HİZMET , BASKI ÜRÜNLERİ VE
                                AŞAĞIDA BELİRTİLEN ŞARTLARDA TAM BİR ANLAŞMAYA VARMIŞTIR</Text>
                        </View>
                        <View style={[styles.flexRow]}>
                            <Text style={styles.ColCont1}>MADDE 2- KONU</Text>
                            <Text style={styles.ColCont2}>BELİRLENEN MEKAN VEYA MEKANLARDA FOTOĞRAF ÇEKİMİ HİZMETİ
                                İŞBU SÖZLEŞME MÜŞTERİNİN İHTİYAÇ DUYDUĞU FOTOĞRAF ÇEKİMİ HİZMETİNİN
                                FOTOĞRAFÇI TARAFINDAN HAZIRLANMASI VE BASKI HALİNE GETİRİLMESİNİ KAPSAMAKTADIR</Text>
                        </View>
                        <View style={[styles.flexRow]}>
                            <Text style={styles.ColCont1}>MADDE 3- HÜKÜMLER</Text>
                            <View style={styles.ColCont2}>
                                <Text style={styles.contSeperator}> 3.1. BU SÖZLEŞME İLE ÇEKİLEN FOTOĞRAFLARIN TELİF VE SAKLAMA HAKLARI ESER SAHİBİ FOTOĞRAFÇIYA AİTTİR. FOTOĞRAFÇININ VE MÜŞTERİNİN İZNİ OLMADAN 3. ŞAHISLAR TARAFINDAN KULLANILAMAZ.</Text>
                                <Text style={styles.contSeperator}> 3.2. FOTOĞRAF ÇEKİMİ YAPILACAK MEKANLARDA , MEKAN ÜCRETLİ VE PAKETE DAHİL DEĞİL İSE ÇİFT TARAFINDAN ÖDENİR. </Text>
                                <Text style={styles.contSeperator}>3.3. MÜŞTERİ ÇEKİMİ YAPILAN FOTOĞRAFLARI. 1HAFTA İÇİNDE TESLİM ALMAK İÇİN MAİL İLETMEK , 2 HAFTA İÇERİSİNDE
                                    SEÇMEK ZORUNDADIR. 2 HAFTA İÇİNDE SEÇİM YAPILMAZ İSE VE ALBÜM FİRMASI ZAM UYGULAR İSE BU ZAM ÇİFTE YANSITILIR. YA DA ALBÜM ÜCRETİ MÜŞTERİYE İADE EDİLMEK SURETİ İLE ALBÜM PAKETTEN ÇIKARILIR.</Text>
                                <Text style={styles.contSeperator}> 3.4. FOTOĞRAFLARIN OLAĞANÜSTÜ BİR NEDENLE (DEPREM,YANGIN,DOĞAL AFET VS.) ZAYİ OLMALARI VEYA ZARARA UĞRAMALARI HALİNDE FOTOĞRAFÇI SORUMLU TUTULAMAZ.</Text>
                                <Text style={styles.contSeperator}>
                                    3.5. MÜŞTERİ HERHANGİ BİR SEBEPTEN DOLAYI FOTOĞRAF ÇEKİMİNİ İPTAL ETMESİ DURUMUNDA ;
                                    ÇEKİME 30 GÜNDEN FAZLA SÜRE KALDIYSA ÖDENEN ÜCRETİN YARISI MÜŞTERİYE İADE EDİLİR.
                                    ÇEKİME 30 GÜNDEN AZ SÜRE KALDIYSA MÜŞTERİYE PARA İADESİ YAPILMAZ.</Text>

                                <Text style={styles.contSeperator}>   3.6 MÜŞTERİ FOTOĞRAFLARINI 3 AY İÇERİSİNDE ALMAZ İSE FİRMA BU FOTOĞRAFLARI DEPOLAMAK ZORUNDA DEĞİLDİR.</Text>
                                <Text style={styles.contSeperator}>    3.7. TÜM İŞLEMLERİ BİTMİŞ FOTOĞRAF VE VİDEOLAR SİLİNİR. MÜŞTERİ PAKET İÇERİĞİNİ TESLİM ALDIĞINDA TEKRAR GÖNDERİLMEZ.</Text></View>

                        </View>
                        <View style={[styles.flexRow]}>
                            <Text style={styles.ColCont1}>MADDE 4 - CEZAİ ŞART</Text>
                            <Text style={styles.ColCont2}>TARAFLARCA SÖZLEŞMEDE YAZILI BEYAN VE TAAHÜTLERİN HARHANGİ BİRİNİN İHLAL EDİLMESİ VE/VEYA SÖZLEŞMENİN
                                HAKSIZ ŞEKİLDE FESH EDİLMESİ DURUMUNDA , DİĞER TARAFIN BU NEDENLE UĞRAYACAĞI TÜM MÜSPET-MENFİ ZARARLARI , TAZMİN EDECEKLERİNİ BEYAN , KABUL VE TAAHÜT ETMEKTEDİRLER.</Text>
                        </View>
                        <View style={[styles.flexRow]}>
                            <Text style={styles.ColCont1}>MADDE 5- DİĞER</Text>
                            <Text style={styles.ColCont2}>5.1. FOTOĞRAFLARIN ORTALAMA TESLİM SÜRESİ 30-40 GÜNDÜR.
                                MÜŞTERİ {userDetails?.name} 5.2. TARAFLAR ARASINDA DAHA ÖNCE GERÇEKLEŞEN , HER TÜRLÜ GÖRÜŞME , BEYAN VE TAAHÜTLERİ HÜKÜMSÜZ KILAN İŞ BU SÖZLEŞMENİN HÜKÜMLERİ , TARAFLARIN KARŞILIKLI MUTABAKATLARIYLA ANCAK YAZILI OLARAK DEĞİŞTİRİLEBİLİR.</Text>
                        </View>
                        <View style={styles.marginHeader}>
                        </View>
                        <View style={styles.flexRow2}>
                            <Text style={styles.ColFooter}>AD SOYAD</Text>
                            <Text style={[styles.ColFooter]}>NABİ ÖZER</Text>
                            <Text style={styles.ColFooter}>MÜŞTERİ AD SOYAD</Text>
                            <Text style={styles.ColFooter}>{userDetails?.name}</Text>

                        </View>
                        <View style={styles.flexRow2}>
                            <Text style={styles.ColFooter}>İMZA</Text>
                            <Text style={[styles.ColFooter, styles.signBox]}></Text>
                            <Text style={styles.ColFooter}>İMZA</Text>
                            <Text style={[styles.ColFooter, styles.signBox]}></Text>

                        </View>
                    </View>
                </View>
            </Page>

        </Document >
    )
}

export default ContractPdf