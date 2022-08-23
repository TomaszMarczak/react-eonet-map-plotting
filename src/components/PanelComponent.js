import React from "react";
import { Card, Stack, Button, ButtonGroup } from "react-bootstrap";
import { useApp } from "../contexts/AppContext";
import { useEffect } from "react";

export default function PanelComponent() {
  const {
    checkedIcebergs,
    checkedVolcanoes,
    checkedWildfires,
    setCheckedIcebergs,
    setCheckedVolcanoes,
    setCheckedWildfires,
    volcanoes,
    wildfires,
    icebergs,
  } = useApp();

  useEffect(() => {
    console.log("----------------------------");
    console.log(`Volcanoes: ${checkedVolcanoes}`);
    console.log(`Wildfires: ${checkedWildfires}`);
    console.log(`Icebergs: ${checkedIcebergs}`);
  }, [checkedIcebergs, checkedVolcanoes, checkedWildfires]);

  return (
    <div style={{ zIndex: "1000", position: "absolute", right: 0 }}>
      <Card className="m-4 p-2">
        <Card.Body>
          <Card.Title className="py-1">Panel</Card.Title>
          <Stack>
            <ButtonGroup vertical>
              <Button
                variant={checkedVolcanoes ? "primary" : "secondary"}
                onClick={() => setCheckedVolcanoes(!checkedVolcanoes)}
              >
                Volcanoes
              </Button>
              <Button
                variant={checkedWildfires ? "primary" : "secondary"}
                onClick={() => setCheckedWildfires(!checkedWildfires)}
              >
                Wildfires
              </Button>
              <Button
                className="mb-2"
                variant={checkedIcebergs ? "primary" : "secondary"}
                onClick={() => setCheckedIcebergs(!checkedIcebergs)}
              >
                Icebergs
              </Button>
            </ButtonGroup>

            <Card.Text>
              {volcanoes.length} Volcanoes <br />
              {wildfires.length} Wildfires <br />
              {icebergs.length} Icebergs
            </Card.Text>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
}
