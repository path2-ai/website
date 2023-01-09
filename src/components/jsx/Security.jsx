export function Security() {
    return (
        <div className="relative overflow-hidden text-gray-100 py-16">
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg">
                    <h1>
                        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
                            Everything you need to know about our security practices
                        </span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-white">
                        Our application refinery is highly secure, as we follow industry-leading best practices to keep all of your data secure.
                    </p>
                    <div>
                        <p className="mt-6 text-white">
                            How is my data encrypted?
                        </p>
                        <p className="mt-2 text-gray-300">
                            All of your data is encrypted at transfer using HTTPS in order to protect requests from eavesdrop and man-in-the-middle attacks. Additionally, your data is encrypted at rest using AES-256, securing your data from unauthorized access.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            How often are backups created?
                        </p>
                        <p className="mt-2 text-gray-300">
                            We use a managed database for production, which automatically creates backups in form of snapshots from the data every day.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            Where are the data centers located?
                        </p>
                        <p className="mt-2 text-gray-300">
                            Our application solely runs on three Digital Ocean located in Frankfurt, Germany. Digital Ocean data centers maintain state-of-the-art physical security, including 24x7x365 surveillance, environmental protection, and extensive secure access policies.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            On which OS is the application running?
                        </p>
                        <p className="mt-2 text-gray-300">
                            Kern AI servers run in recent Linux OS releases with Long Term Support policies and are regularly updated. Our engineering team monitors uptime and is able to quickly act if errors occur.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            How do you ensure operational security?
                        </p>
                        <p className="mt-2 text-gray-300">
                            Only a small number of authorized employees can access user data. Accessing users’ accounts by kern employees is only allowed in exceptional cases, always with your prior permission and for the purpose of resolving a specific issue only.
                            We use specialized tools for storing and sharing passwords and other sensitive data and require our employees to use Multi-Factor authentication for all tools where possible.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            Can we use Multi-Factor Authorization?
                        </p>
                        <p className="mt-2 text-gray-300">
                            We provide your users to enable MFA for login to reduce friction and increase security. Additionally, we use a security stack that detects whether your password has been leaked in a recent data breach, and validates that used passwords are secure.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            Is the application available on private cloud or on-premises?
                        </p>
                        <p className="mt-2 text-gray-300">
                            Yes, we offer multiple deployment options. Please contact our sales.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            I have some further questions about your security - who can I contact?
                        </p>
                        <p className="mt-2 text-gray-300">
                            For all further questions, please contact henrik.wenck@kern.ai.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}