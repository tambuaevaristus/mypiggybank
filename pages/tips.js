import React from "react"; import Navbar from "../components/Navbar";
import Tips from "../components/Tips";

export default function tips() {
  return (
    <div>
      <Navbar />
      <div class="d-flex">
        <div class="overflow-auto">
          <Tips
            title="Know the Importance of Saving"
            description="The secret to spending wisely is to have much mouchh money , the things are bad eeeh..."
            image="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
          />
          <Tips
            title="Spending Wisely"
            description="The secret to spending wisely is to have much mouchh money , the things are bad eeeh..."
            image="data:image/png;base64,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"
          />
          <Tips
            title="Spending NOno"
            description="The secret to spending wisely is to have much mouchh money , the things are bad eeeh..."
          />
          <Tips
            title="Spending Wisely"
            description="The secret to spending wisely is to have much mouchh money , the things are bad eeeh..."
          />
          <Tips
            title="Spending Wisely"
            description="The secret to spending wisely is to have much mouchh money , the things are bad eeeh..."
          />
          <Tips
            title="Spending Wisely"
            description="The secret to spending wisely is to have much mouchh money , the things are bad eeeh..."
          />
          <Tips
            title="Spending Wisely"
            description="The secret to spending wisely is to have much mouchh money , the things are bad eeeh..."
          />
          <Tips
            title="Spending Wisely"
            description="The secret to spending wisely is to have much mouchh money , the things are bad eeeh..."
          />
          <Tips
            title="Spending Wisely"
            description="The secret to spending wisely is to have much mouchh money , the things are bad eeeh..."
          />
          <Tips
            title="Spending Wisely"
            description="The secret to spending wisely is to have much mouchh money , the things are bad eeeh..."
          />
          <Tips
            title="Spending Wisely"
            description="The secret to spending wisely is to have much mouchh money , the things are bad eeeh..."
          />
          <Tips
            title="Spending Wisely"
            description="The secret to spending wisely is to have much mouchh money , the things are bad eeeh..."
          />
          <Tips
            title="Spending Wisely"
            description="The secret to spending wisely is to have much mouchh money , the things are bad eeeh..."
          />
        </div>
      </div>
    </div>
  );
}
