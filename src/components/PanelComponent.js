import React from "react";
import { Card, Stack, ToggleButton } from "react-bootstrap";
import { useApp } from "../contexts/AppContext";

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

  return (
    <div style={{ zIndex: "1000", position: "absolute", right: 0 }}>
      <Card className="m-4 p-2">
        <Card.Body>
          <Card.Title className="py-1">Panel</Card.Title>
          <Stack>
            <ToggleButton
              className="mb-2"
              id="toggle-check-volcanoes"
              type="checkbox"
              variant="outline-primary"
              checked={checkedVolcanoes}
              value="volcanoes"
              onChange={() => setCheckedVolcanoes(!checkedVolcanoes)}
            >
              Volcanoes
            </ToggleButton>
            <ToggleButton
              className="mb-2"
              id="toggle-check-wildfires"
              type="checkbox"
              variant="outline-primary"
              checked={checkedWildfires}
              value="wildfires"
              onChange={() => setCheckedWildfires(!checkedWildfires)}
            >
              Wildfires
            </ToggleButton>
            <ToggleButton
              className="mb-2"
              id="toggle-check-icebergs"
              type="checkbox"
              variant="outline-primary"
              checked={checkedIcebergs}
              value="icebergs"
              onChange={() => setCheckedIcebergs(!checkedIcebergs)}
            >
              Icebergs
            </ToggleButton>
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