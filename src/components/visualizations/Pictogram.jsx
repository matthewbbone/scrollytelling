import React, { useEffect } from 'react'
import styles from './Pictogram.module.css'
import d3, { svg } from 'd3'
import { scaleBand } from 'd3-scale'

const Pictogram = ({
    element,
    count,
    groups,
    numRows = 10,
    width = 500,
}) => {

    const numCols = Math.ceil(count / numRows)
    const height = Math.round(width / numCols * numRows)
    const iconSize = width / numCols / 1.5

    useEffect(() => {

        const svg = d3.select(`#${element}`)
            .append('svg')
            .attr("width", width)
            .attr("height", height)
            .style('background-color', 'rgb(0,0,0,0)');

        const y = scaleBand()
            .range([0, Math.round(.9 * height)])
            .domain(d3.range(numRows));

        const x = scaleBand()
            .range([0, Math.round(.9 * width)])
            .domain(d3.range(numCols));

        const data = d3.range(count);

        //container to hold the grid
        const container = svg
            .append("g")
            .attr("transform", `translate(${iconSize},${iconSize})`);

        container.selectAll('image')
            .data(data)
            .enter().append("image")
            .transition()
            .duration(1000)
            .attr("id", function (d) { return "id" + d; })
            .attr('x', function (d) { return x(d % numCols); })
            .attr('y', function (d) { return y(Math.floor(d / numCols)); })
            .attr('width', iconSize)
            .attr('height', iconSize)
            .attr("xlink:href", function (d) {
                var icon = null
                Object.entries(groups).every(([key, val]) => {
                    icon = d > val.threshold * count ? icon : val.icon
                    return d > val.threshold * count
                })
                return icon;
            })
            .attr('opacity', function (d) { return 1 });
    }, [])

    const Legend = ({ groups, iconSize, styles }) => {
        return (
            <div className={styles.legend}>
                {
                    Object.entries(groups).map(([key, val]) => {
                        return (
                            <div key={`legend-${key}`} className={styles.legendItem}>
                                <div>{val.description}</div>
                                <img
                                    src={val.icon}
                                    width={iconSize}
                                    height={iconSize}
                                    className={styles.legendIcon}>
                                </img>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div id={`${element}`} className={styles.pictogram}></div>
            <Legend groups={groups} iconSize={iconSize} styles={styles}></Legend>
        </div>
    )
}

export default Pictogram