# AWS
- For setting up servers, use EC2 service from AWS
- For domain names, use Route53
- Make sure you have an AWS account first (with payments set up cuz this aint free)

## EC2 Basic Instructions
> [!NOTE]
> The AMI for the server is for this class, but I'm sure you could use it for personal stuff, too. Hopefully.

- From AWS console, go to the EC2 service
- Make sure the region is N. Virginia (for the AMI)
- Select `Launch Instance`
- Give the instance a name (a good convention is `[owner]-[purpose]-[version]`)
- Find the AMI with the ID `ami-018f3a022e128a6b2` and select it
- Select the server type, like t3.nano, that you want (be aware of prices)
- Create a new key pair or select an existing one (for ssh security)
- Enable `auto-assign public IP` and select an existing security group (or create one if you haven't already)
- Allow SSH, HTTP, and HTTPS traffic from anywhere
- If your server is a T3 class, then make sure `Credit specification` is set to `Unlimited` in the Advanced Details
- Click `Launch Instance`

### How to SSH into the Server
- This uses the IP address from above to shell into the server
- Go to console window (Git Bash) and use the following command to shell into the server:
```
ssh -i [key pair file] ubuntu@[ip address]
```
- For example, mine would be (note that this is my elastic IP address, and a URL will work later once one is registered):
```
ssh -i [my key file] ubuntu@98.88.134.225
```
- If I get a warning about my key file permissions, then I can run the following command to help (IDK what it does lol):
```
chmod 600 mykeyfile.pem
```
- It's gonna say it hasn't seen the server before, but you're confident, so say yes
- You can now poke around
- Once finished, type `exit` to exit the ssh

### Setting up Elastic IP Address
Stopping and starting your server will change the IP address when you start it up again,
so assigning an elastic IP address keeps that from happening. The first elastic IP address is free,
but only free while server is running, so for me I'll just keep it running. Good "just in case" thing.

- From AWS console, go to EC2 service.
- Make sure the region is set to the one where your server is.
- On left menu, navigate to `Network & Security` > `Elastic IPs`
- Click `Allocate Elastic IP address`
- Click `Allocate`
- Select the newly created address and click `Actions`
- Click `Associate Elastic IP address`
- Click on the `Instance` box and select the server instance
- Click `Associate`

## Route53 Basic Instructions
- Placeholder

### Leasing a Domain Name
> [!TIP]
> The TLD (Top Level Domains) are controlled by ICANN, and the `.link` and `.click` ones are usually the cheapest.

- From AWS Console, navigate to `Route53` > `Domains` > `Registered Domains`
- Click the `Register Domains` button
- Search for and select the domain you want and select it for purchase
- Fill out the contact details

> [!IMPORTANT]
> You may need to respond to an email to verify that your contact info is correct. Check the spam folder just in case, otherwise in 15 days the domain won't be yours anymore.

- Complete your order

### Setting Up DNS Records
> [!NOTE]
> This connects your domain name to your server's public IP address (hopefully is an elastic one so you don't have to change it).

> [!IMPORTANT]
> The website will still use HTTP instead of HTTPS. That's what Caddy (below) is for.

- From AWS console, navigate to `Route53` > `Hosted Zones`
- You should see the domain name you just leased (if not, could be in `Domains` > `Pending Requests`).
- Select the domain name and click `View Details` to see the deets
- Create the root domain DNS record:
  1. Click `Create Record`
  2. Enter the public IP of the server in the Value box
  3. Click `Create Records`
  4. You should see a new `A` type record should appear (in addition to the `NS` and `SOA` types).
- Create a DNS record for any and all subdomains:
  1. Click `Create Record`
  2. Enter `*` in the `Record Name` box, this acts as a wildcard for any DNS that aren't explicitly defined
  3. Enter the public IP in the `Value` box
  4. Click `Create Records`
  5. One more `A` type record will appear, this one with an `*` in it

> [!TIP]
> Give it a few minutes for the domain name to kick in. I wasn't able to hit the domain name for a bit right after creating the records.
