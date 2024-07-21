import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import header from "../../assets/header.png";

const styles = StyleSheet.create({
  page: {
    fontSize: 12,
    color: "#000",
  },
  section: {
    padding: 5,
    paddingHorizontal: 20,
  },
  header: {
    width: "100%",
    height: "auto",
    top: 0,
    left: 0,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
  },
  titleText: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 9,
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 9,
    marginBottom: 12,
  },
  table: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  column: {
    flex: 1,
    padding: 5,
    borderRight: "1px solid #000",
  },
  lastColumn: {
    flex: 1,
    padding: 5,
  },
  row: {
    marginBottom: 12,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 7,
    margin: 8,
  },
});

const RecordPDF = ({ station, dates, info }) => {
  const numColumns = 3; // Number of columns in each row
  const rows = [];

  for (let i = 0; i < info.length; i += numColumns) {
    const rowItems = info.slice(i, i + numColumns);
    rows.push(rowItems);
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src={header} style={styles.header} fixed />

        <View style={styles.section}>
          <Text style={styles.title}>Mediciones {dates}</Text>
        </View>
        <View style={styles.section}>
          <Text>Estación: {station.nombre}</Text>
          <Text>Departamento: {station.departamento}</Text>
          <Text>Municipio: {station.municipio}</Text>
          <Text>Latitud: {station.latitud}</Text>
          <Text>Longitud: {station.longitud}</Text>
        </View>
        <Text style={styles.subtitle}>Mediciones</Text>
        <View style={styles.section}>
          {rows.map((row, rowIndex) => (
            <View style={styles.table} key={rowIndex}>
              {row.map((measure, colIndex) => (
                <View
                  style={
                    colIndex === row.length - 1
                      ? styles.lastColumn
                      : styles.column
                  }
                  key={colIndex}
                >
                  <View style={styles.row}>
                    <Text style={styles.titleText}>Fecha: {measure.fecha}</Text>
                    <Text style={styles.text}>
                      Temperatura promedio: {measure.ts || "No medido"} °C
                    </Text>
                    <Text style={styles.text}>
                      Temperatura máxima: {measure.tmax || "No medido"} °C
                    </Text>
                    <Text style={styles.text}>
                      Temperatura mínima: {measure.tmin || "No medido"} °C
                    </Text>
                    <Text style={styles.text}>
                      Temperatura húmeda promedio: {measure.th || "No medido"}{" "}
                      °C
                    </Text>
                    <Text style={styles.text}>
                      Presión del vapor promedio: {measure.pvp || "No medido"}{" "}
                      mmHg
                    </Text>
                    <Text style={styles.text}>
                      Humedad relativa promedio: {measure.hr || "No medido"}%
                    </Text>
                    <Text style={styles.text}>
                      Precipitación: {measure.pd || "No medido"} mm
                    </Text>
                    <Text style={styles.text}>
                      Velocidad del viento: {measure.sa || "No medido"} Beaufort
                    </Text>
                    <Text style={styles.text}>
                      Dirección del viento: {measure.rd || "No medido"}
                    </Text>
                    <Text style={styles.text}>
                      Nubosidad: {measure.nub || "No medido"} décimas
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        marginTop: 10,
                        marginBottom: 8,
                      }}
                    >
                      Fenómenos meteorológicos
                    </Text>
                    <Text style={styles.text}>
                      Rayos: {measure.fray || "No medido"}
                    </Text>
                    <Text style={styles.text}>
                      Tormenta en alrededores: {measure.ftea || "No medido"}
                    </Text>
                    <Text style={styles.text}>
                      Tormenta en el lugar de medición:{" "}
                      {measure.ftee || "No medido"}
                    </Text>
                    <Text style={styles.text}>
                      Granizo: {measure.fgra || "No medido"}
                    </Text>
                    <Text style={styles.text}>
                      Chubascos: {measure.fchu || "No medido"}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
        <Text style={styles.subtitle}>Mediciones por horas</Text>
        <View style={styles.section}>
          {rows.map((row, rowIndex) => (
            <View style={styles.table} key={rowIndex}>
              {row.map((measure, colIndex) => (
                <View
                  style={
                    colIndex === row.length - 1
                      ? styles.lastColumn
                      : styles.column
                  }
                  key={colIndex}
                >
                  <View style={styles.row}>
                    <Text style={styles.titleText}>Fecha: {measure.fecha}</Text>
                    <Text style={styles.text}>
                      Temperatura 7:00: {measure.t07 || "No medido"} °C
                    </Text>
                    <Text style={styles.text}>
                      Temperatura 14:00: {measure.t14 || "No medido"} °C
                    </Text>
                    <Text style={styles.sectionText}>
                      Temperatura 21:00: {measure.t21 || "No medido"} °C
                    </Text>
                    <Text style={styles.text}>
                      Temperatura húmeda 7:00: {measure.th07 || "No medido"} °C
                    </Text>
                    <Text style={styles.text}>
                      Temperatura húmeda 14:00: {measure.th14 || "No medido"} °C
                    </Text>
                    <Text style={styles.sectionText}>
                      Temperatura húmeda 21:00: {measure.th21 || "No medido"} °C
                    </Text>
                    <Text style={styles.text}>
                      Presión del vapor 7:00: {measure.pvp07 || "No medido"}{" "}
                      mmHg
                    </Text>
                    <Text style={styles.text}>
                      Presión del vapor 14:00: {measure.pvp14 || "No medido"}{" "}
                      mmHg
                    </Text>
                    <Text style={styles.sectionText}>
                      Presión del vapor 21:00: {measure.pvp21 || "No medido"}{" "}
                      mmHg
                    </Text>
                    <Text style={styles.text}>
                      Humedad relativa 7:00: {measure.hr07 || "No medido"}%
                    </Text>
                    <Text style={styles.text}>
                      Humedad relativa 14:00: {measure.hr14 || "No medido"}%
                    </Text>
                    <Text style={styles.sectionText}>
                      Humedad relativa 21:00: {measure.hr21 || "No medido"}%
                    </Text>
                    <Text style={styles.text}>
                      Precipitación 7:00: {measure.p07 || "No medido"} mm
                    </Text>
                    <Text style={styles.text}>
                      Precipitación 14:00: {measure.p14 || "No medido"} mm
                    </Text>
                    <Text style={styles.sectionText}>
                      Precipitación 21:00: {measure.p21 || "No medido"} mm
                    </Text>
                    <Text style={styles.text}>
                      Velocidad del viento 7:00: {measure.sa07 || "No medido"}{" "}
                      Beaufort
                    </Text>
                    <Text style={styles.text}>
                      Velocidad del viento 14:00: {measure.sa14 || "No medido"}{" "}
                      Beaufort
                    </Text>
                    <Text style={styles.sectionText}>
                      Velocidad del viento 21:00: {measure.sa21 || "No medido"}{" "}
                      Beaufort
                    </Text>
                    <Text style={styles.text}>
                      Dirección del viento 7:00: {measure.rd07 || "No medido"}
                    </Text>
                    <Text style={styles.text}>
                      Dirección del viento 14:00: {measure.rd14 || "No medido"}
                    </Text>
                    <Text style={styles.sectionText}>
                      Dirección del viento 21:00: {measure.rd21 || "No medido"}
                    </Text>
                    <Text style={styles.text}>
                      Nubosidad 7:00: {measure.nub07 || "No medido"} décimas
                    </Text>
                    <Text style={styles.text}>
                      Nubosidad 14:00: {measure.nub14 || "No medido"} décimas
                    </Text>
                    <Text style={styles.sectionText}>
                      Nubosidad 21:00: {measure.nub21 || "No medido"} décimas
                    </Text>
                    <Text style={styles.text}>
                      Visibilidad 7:00: {measure.vis07 || "No medido"} km
                    </Text>
                    <Text style={styles.text}>
                      Visibilidad 14:00: {measure.vis14 || "No medido"} km
                    </Text>
                    <Text style={styles.sectionText}>
                      Visibilidad 21:00: {measure.vis21 || "No medido"} km
                    </Text>
                    <Text style={styles.text}>
                      Estado del suelo 7:00: {measure.es07 || "No medido"}
                    </Text>
                    <Text style={styles.text}>
                      Estado del suelo 14:00: {measure.es14 || "No medido"}
                    </Text>
                    <Text style={styles.sectionText}>
                      Estado del suelo 21:00: {measure.es21 || "No medido"}
                    </Text>
                    <Text style={styles.text}>
                      Estado del rocío 7:00: {measure.er07 || "No medido"}
                    </Text>
                    <Text style={styles.text}>
                      Estado del rocío 21:00: {measure.er21 || "No medido"}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
        <View style={styles.footer} fixed>
          <Text>Generado el: {new Date().toLocaleDateString()}</Text>
          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
};

export default RecordPDF;
