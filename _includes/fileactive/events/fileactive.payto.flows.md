[Create Mandate flow](#create-mandate-flow)<br/>
[API MPIR flow with lump-sum settlement options](#api-mpir-flow-with-lump-sum-settlement-options)<br/>
[Bulk MPIR flow with lump-sum settlement options](#bulk-mpir-flow-with-lump-sum-settlement-options)<br/>
[Amend Mandate flow](#amend-mandate-flow)<br/>
[Change mandate status - by biller](#change-mandate-status---by-biller)<br/>
[Change mandate status - by payer](#change-mandate-status---by-payer)<br/>
[Query notification and resolution](#query-notification-and-resolution)<br/>
[Get details of mandate](#get-details-of-mandate)<br/>

# Create Mandate flow

<div class="mermaid">

sequenceDiagram
autonumber
    actor Biller
    participant ANZ
    participant MMS
    participant Payer FI
    actor Payer

    %% Step 1: PayTo Mandate Creation (unilateral / bilateral)
    rect rgb(240, 240, 240)
      Note right of Biller: Step 1: PayTo Mandate Creation
      Biller->>ANZ: Create Mandate (API: MandateCreationRequest)
      ANZ->>MMS: Create & send PayTo Mandate 
      MMS->>Payer FI: Store & forward PayTo Mandate
      ANZ->>Biller: Receipt of Mandate Creation (Webhook: MandateActionOutcome)
    end  

    %% Step 2: PayTo Mandate Authorization (bilateral only)
    rect rgb(240, 240, 240)
      Note right of Biller: Step 2: PayTo Mandate Authorization
      Payer FI->>Payer: PayTo Mandate Request
      Payer->>Payer FI: Approve or Reject via FI platform or app
      Payer FI->>MMS: Response to MMS
      MMS->>ANZ: Store & forward PayTo Mandate response
      ANZ->>Biller: Outcome via (Webhook: MandateNotification)      
    end

</div>

# API MPIR flow with lump-sum settlement options

<div class="mermaid">

sequenceDiagram
autonumber
    actor Biller
    participant ANZ
    participant MMS
    participant Payer FI(s)
    actor Payer(s)

    %% Step 1: Payment Initiation
    rect rgb(240, 240, 240)
      Note right of Biller: Step 1: Payment Initiation
      Biller->>ANZ: Send initiation request (API: MPIRCreationRequest)
      ANZ->>MMS: Validate initiation request
      ANZ->>Payer FI(s): Receive payment initiation
    end

    %% Step 2: Receive Outcome
    rect rgb(240, 240, 240)
      Note right of Biller: Step 2: Receive Outcome
      Payer FI(s)->>ANZ: Send initiation request outcome
      Payer FI(s)->>ANZ: Receive funds in nominated account for successful initiation request(s).
      ANZ->>Biller: Outcome via (Webhook: MPIRActionOutcome)
    end

    %% Step 3: Receive lump-sum settlement & Report (Opt-in)
    rect rgb(240, 240, 240)
      Note right of Biller: Step 3: Receive lump-sum settlement & Report (Opt-in) 
      ANZ->>Biller: All successful MPIRs credited at agreed time as a lump-sum amount
      ANZ->>Biller: Lump sum settlement report (camt.054.001.02)
    end

</div>

# Bulk MPIR flow with lump-sum settlement options

<div class="mermaid">

sequenceDiagram
autonumber
    actor Biller
    participant ANZ
    participant MMS
    participant Payer FI(s)
    actor Payer(s)

    %% Step 1: Payment Initiation
    rect rgb(240, 240, 240)
      Note right of Biller: Step 1: Payment Initiation
      Biller->>ANZ: Send Bulk MPIR file (pain.a46.001.03)
      ANZ->>MMS: Validate initiation request
      ANZ->>Payer FI(s): Receive payment initiation
    end

    %% Step 2: Receive Outcome
    rect rgb(240, 240, 240)
      Note right of Biller: Step 2: Receive Outcome
      Payer FI(s)->>ANZ: Send initiation request outcome
      Payer FI(s)->>ANZ: Receive funds in nominated account for successful initiation request(s).
      ANZ->>Biller: Receive Bulk MPIR outcome file (pain.a47.001.01)
    end

    %% Step 3: Receive lump-sum settlement & Report (Opt-in)
    rect rgb(240, 240, 240)
      Note right of Biller: Step 3: Receive lump-sum settlement & Report (Opt-in)
      ANZ->>Biller: All successful MPIRs credited at agreed time as a lump-sum amount
      ANZ->>Biller: Lump sum settlement report (camt.054.001.02)
    end

</div>

# Amend Mandate flow

<div class="mermaid">

sequenceDiagram
autonumber
    actor Biller
    participant ANZ
    participant MMS
    participant Payer FI
    actor Payer

    %% Step 1: PayTo Mandate Update (unilateral / bilateral)
    rect rgb(240, 240, 240)
      Note right of Biller: Step 1: PayTo Mandate Update (unilateral / bilateral)
      Biller->>ANZ: Amend Mandate (API: MandateAmendmentRequest)
      ANZ->>MMS: Send Updated PayTo Mandate
      MMS->>Payer FI: Store & forward PayTo Mandate
      ANZ->>Biller: Receipt of Amend Mandate Request via in (Webhook: MandateActionOutcome)
    end  

    %% Step 2: PayTo Mandate Authorization (bilateral only)
    rect rgb(240, 240, 240)
      Note right of Biller: Step 2: PayTo Mandate Authorization
      Payer FI->>Payer: PayTo Amend Mandate Request
      Payer->>Payer FI: Approve or Reject via FI platform or app
      Payer FI->>MMS: Response to MMS
      MMS->>ANZ: Store & forward PayTo Mandate response
      ANZ->>Biller: Outcome via (Webhook: MandateNotification)      
    end  

</div>

# Change mandate status - by biller

<div class="mermaid">

sequenceDiagram
autonumber
    actor Biller
    participant ANZ
    participant MMS
    participant Payer FI
    actor Payer

    %% Step 1: Status Change Initiation
    rect rgb(240, 240, 240)
      Note right of Biller: Step 1: Status Change Initiation
      Biller->>ANZ: Send initiation request (API: MandateStatusChangeRequest)
      ANZ->>MMS: Update mandate status
      MMS->>Payer: Receive notification of change via Payer FI      
    end

    %% Step 2: Receive Outcome
    rect rgb(240, 240, 240)
      Note right of Biller: Step 2: Receive Outcome
      ANZ->>Biller: Receive notification of change (API: MandateActionOutcome)      
    end

</div>

# Change mandate status - by payer

<div class="mermaid">

sequenceDiagram
autonumber
    actor Biller
    participant ANZ
    participant MMS
    participant Payer FI
    actor Payer

    %% Step 1: Status Change Initiation
    rect rgb(240, 240, 240)
      Note right of Biller: Step 1: Status Change Initiation
      Payer->>Payer FI: Change status of PayTo Agreement via FI platform or app
      Payer FI->>MMS: Update mandate status       
    end

    %% Step 2: Receive Outcome
    rect rgb(240, 240, 240)
      Note right of Biller: Step 2: Receive Outcome
      MMS->>ANZ: Receive notification of change     
      ANZ->>Biller: Outcome via Webhook (API: MandateNotification)      
    end

</div>


# Query notification and resolution

<div class="mermaid">

sequenceDiagram
autonumber
    actor Biller
    participant ANZ
    participant MMS
    participant Payer FI
    actor Payer

    %% Step 1: Query Notification
    rect rgb(240, 240, 240)
      Note right of Biller: Step 1: Query Notification
      Payer->>Payer FI: Raise Query with FI re: Transaction or Mandate
      Payer FI->>ANZ: Receive Payer Query     
      ANZ->>Biller: Query Notification via (Webhook: QueryNotification)
    end

    %% Step 2: Outcome Response
    rect rgb(240, 240, 240)
      Note right of Biller: Step 2: Outcome Response      
      Biller->>ANZ: Respond to Query via (API: QueryResolutionRequest)     
      ANZ->>Payer: Receive Biller Response      
    end

</div>


# Get details of mandate

<div class="mermaid">

sequenceDiagram
autonumber
    actor Biller
    participant ANZ
    participant MMS

    %% Step 1: Initiate API
    rect rgb(240, 240, 240)
      Note right of Biller: Step 1: Initiate API
      Biller->>ANZ: API: GET mandate details {mandateId}
      ANZ->>MMS: Request Agreement Details      
    end

    %% Step 2: Outcome Response
    rect rgb(240, 240, 240)
      Note right of Biller: Step 2: Outcome Response      
      MMS->>Biller: Receive details of Agreement via ANZ           
    end

</div>