import Job from "../models/jobModel.js";

export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, jobType, location, salary, company, recruiter } = req.body;
        const userID = req.id;

        if (!title || !description || !requirements || !jobType || !location || !salary || !company || !recruiter)
            res.status(400).json({
                message: "Some field(s) are empty.",
                success: false
            });

        if (salary.value < 0)
            res.status(400).json({
                message: "Enter a valid salary.",
                success: false
            });

        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            jobType,
            location,
            salary: Number(salary),
            company,
            recruiter: userID,
        });

        return res.status(201).json({
            message: "New Job created successfully.",
            job,
            success: true
        })

    } catch (err) {
        console.log(err);
    }
}

export const getJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ]
        };

        const jobs = await Job.find(query);

        if (!jobs)
            res.status(404).json({
                message: "Job not found!",
                success: false
            });

        return res.status(200).json({
            jobs,
            success: true
        });
    } catch (error) {
        console.log(error)
    }
}

export const getJobByID = async (req, res) => {
    try {
        const jobID = req.params.id;
        const job = await Job.findById(jobID);
        if (!job)
            res.status(404).json({
                message: "Job NOT found!",
                success: false
            });

        return res.status(200).json({
            job,
            success: true
        });
    } catch (error) {
        console.log(error)
    }
}